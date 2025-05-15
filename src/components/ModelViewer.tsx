import { useRef, useState, useEffect, Suspense, Component, useCallback, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Global model cache to prevent re-downloading
const modelCache = new Map();

// Preload commonly used models when idle
const preloadModels = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      const commonModels = [
        '21_0524221030.glb',
        'carot_0524221015.glb',
        'lightning.glb',
        'logo_bitnet_wb_0524221043.glb'
      ];

      commonModels.forEach(model => {
        const path = `/assets/nfts/${model}`;
        if (!modelCache.has(path)) {
          // Preload the model
          useGLTF.preload(path);
          console.log(`Preloaded model: ${path}`);
        }
      });
    });
  }
};

// Simple error boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Model error caught by boundary:", error);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <group>
          <mesh scale={[0.8, 0.8, 0.8]} rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#333333" wireframe opacity={0.5} transparent />
          </mesh>
        </group>
      );
    }

    return this.props.children;
  }
}

// Model component to display a single GLB
function Model({ path }) {
  const group = useRef();

  // State to track model loading
  const [error, setError] = useState(false);
  const [pathAttemptIndex, setPathAttemptIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Define all possible paths where models might be located
  const getPossiblePaths = useCallback((originalPath) => {
    // If it's already just a filename, generate various possible paths
    if (!originalPath.includes('/')) {
      return [
        `/assets/nfts/${originalPath}`,  // Standard assets path
        `/nfts/${originalPath}`,          // Nfts directory at root
        `/${originalPath}`,               // Root directory
        `${originalPath}`,                // Just the filename
        `/public/assets/nfts/${originalPath}` // Public assets
      ];
    }

    // If it already has a path, still provide some alternatives
    return [originalPath];
  }, []);

  // Get all possible paths for this model - memoized
  const possiblePaths = useMemo(() => getPossiblePaths(path), [path, getPossiblePaths]);

  // Get the current path to try based on our attempt index
  const currentPathToTry = possiblePaths[pathAttemptIndex % possiblePaths.length];

  // Effect to try the next path if the current one fails
  useEffect(() => {
    if (error && pathAttemptIndex < possiblePaths.length - 1) {
      // Try the next path
      const timerId = setTimeout(() => {
        setError(false);
        setPathAttemptIndex(prev => prev + 1);
      }, 500);

      return () => clearTimeout(timerId);
    }
  }, [error, pathAttemptIndex, possiblePaths.length]);

  // Check if model is in cache first
  useEffect(() => {
    if (modelCache.has(currentPathToTry)) {
      setIsLoaded(true);
    }
  }, [currentPathToTry]);

  // Handle successful model load
  const handleModelLoad = useCallback((gltf) => {
    // Store in cache
    if (!modelCache.has(currentPathToTry)) {
      modelCache.set(currentPathToTry, gltf);
    }
    setIsLoaded(true);
    
    // Signal to parent component that model is loaded
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('modelLoaded', { 
        detail: { path: currentPathToTry } 
      }));
    }
  }, [currentPathToTry]);

  // Load the model with the current path
  const gltf = useGLTF(
    currentPathToTry,
    (gltf) => handleModelLoad(gltf),
    undefined,
    (e) => {
      // Set error state to trigger our retry effect
      setError(true);
    }
  );

  // Auto-rotation effect - very slight rotation only
  useFrame(() => {
    if (group.current) {
      // Only rotate, never change position
      group.current.rotation.y += 0.0025;

      // Ensure position stays fixed at center
      group.current.position.x = 0;
      group.current.position.y = 0;
      group.current.position.z = 0;
    }
  });

  // Show elegant fallback if model fails to load
  if (error) {
    return (
      <group>
        <mesh scale={[0.8, 0.8, 0.8]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#333333" wireframe opacity={0.5} transparent />
        </mesh>
      </group>
    );
  }

  // Center the model
  useEffect(() => {
    try {
      if (gltf && gltf.scene) {
        // Create a bounding box
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());

        // Center the model horizontally and vertically
        gltf.scene.position.x = -center.x;
        gltf.scene.position.y = -center.y;
        gltf.scene.position.z = -center.z;

        // Calculate size for better scaling
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        // Adjust scale based on size - moderate scale
        const scale = 1.8 / maxDim;

        // Apply scale to group ref when available
        if (group.current) {
          group.current.scale.set(scale, scale, scale);
        }
      }
    } catch (e) {
      console.warn('Error centering model:', e);
    }
  }, [gltf]);

  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// Main ModelViewer component
export default function ModelViewer({ modelPath, backgroundColor = '#1a1a20', height = 200 }) {
  const [canvasError, setCanvasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Add loading state timeout to show initial animation
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Show loading animation for a short period
    
    return () => clearTimeout(loadingTimer);
  }, []);

  // Trigger preloading when component mounts
  useEffect(() => {
    // Use a short timeout to not interfere with component initial render
    setTimeout(() => {
      preloadModels();
    }, 100);
  }, []);

  // Clean fallback component when 3D fails
  const Fallback = () => (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#aaa',
      backgroundColor: backgroundColor || '#1a1a20',
      borderRadius: '8px'
    }}>
      <img
        src="/assets/fallbacks/model-fallback.svg"
        alt="Loading 3D Model"
        style={{
          width: '70%',
          height: 'auto',
          maxHeight: '70%',
          opacity: 0.8
        }}
      />
    </div>
  );

  return (
    <div style={{
      width: '100%',
      height,
      backgroundColor: backgroundColor || '#1a1a20',
      borderRadius: '12px 12px 0 0',
      overflow: 'hidden',
      padding: '6px 0', // 6px top/bottom, 0px left/right
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      {canvasError ? (
        <Fallback />
      ) : isLoading ? (
        // Show a clean loading state before the canvas is ready
        <div style={{
          width: '100%',
          height: 'calc(100% - 12px)',
          borderRadius: '8px',
          backgroundColor: backgroundColor || '#1a1a20',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'opacity 0.3s ease'
        }}>
          <img
            src="/assets/fallbacks/model-fallback.svg"
            alt="Loading 3D Model"
            style={{
              width: '50%',
              height: 'auto',
              opacity: 0.7,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>
      ) : (
        <Canvas
          style={{
            width: '100%',
            height: 'calc(100% - 12px)', // Account for 6px top + 6px bottom padding
            borderRadius: '8px',
            transition: 'opacity 0.3s ease'
          }}
          camera={{
            position: [0, 0, 6.5], // Balanced camera distance
            fov: 25, // More focused field of view
            near: 0.1,
            far: 1000
          }}
          gl={{
            preserveDrawingBuffer: false, 
            powerPreference: 'high-performance',
            antialias: true,
            depth: true,
            stencil: false,
            alpha: false,
            failIfMajorPerformanceCaveat: false
          }}
          dpr={window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio}
          performance={{ min: 0.5 }}
          linear={true}
          flat={false}
          onCreated={state => {
            state.gl.setClearColor(new THREE.Color(backgroundColor));
            state.gl.setPixelRatio(window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio);
          }}
        >
          <Suspense fallback={
            <group>
              {/* Minimalist loading indicator */}
              <mesh rotation={[0, Math.PI / 4, 0]}>
                <torusGeometry args={[1, 0.2, 16, 32]} />
                <meshBasicMaterial color="#ffffff" opacity={0.15} transparent wireframe />
              </mesh>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.5, 0.7, 32]} />
                <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
              </mesh>
            </group>
          }>
            <ErrorBoundary onError={() => setCanvasError(true)}>
              {/* Modified PresentationControls */}
              <PresentationControls
                global
                rotation={[0, 0, 0]} // No initial rotation
                polar={[-Math.PI / 4, Math.PI / 4]} // Reduced rotation range
                azimuth={[-Math.PI / 4, Math.PI / 4]} // Reduced rotation range
                config={{ mass: 1, tension: 170, friction: 26 }}
                snap={{ mass: 2, tension: 150, friction: 20 }}
                speed={0.8} // Slightly slower speed for better control
                zoom={0.0} // Disable zoom completely
              >
                {/* Simplified lighting setup for better performance */}
                <ambientLight intensity={0.7} /> {/* Increased ambient light to compensate for fewer lights */}
                <directionalLight
                  position={[5, 5, 5]}
                  intensity={0.8}
                />

                {/* The 3D model */}
                <Model path={modelPath} />
                
                {/* Subtle ambient animation elements */}
                <mesh position={[0, 0, -3]} rotation={[0, 0, 0]}>
                  <sphereGeometry args={[2, 16, 16]} />
                  <meshBasicMaterial color={backgroundColor || "#1a1a20"} transparent opacity={0.1} />
                </mesh>
              </PresentationControls>

              {/* Improved environment for better lighting and reflections */}
              <Environment preset="city" background={false} intensity={0.3} />
            </ErrorBoundary>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}