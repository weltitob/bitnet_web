import { useRef, useState, useEffect, Suspense, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

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
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ff5500" />
        </mesh>
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
  
  // Define all possible paths where models might be located
  const getPossiblePaths = (originalPath) => {
    // If it's already just a filename, generate various possible paths
    if (!originalPath.includes('/')) {
      return [
        `/assets/nfts/${originalPath}`,  // Standard assets path
        `/${originalPath}`,               // Root directory
        `/nfts/${originalPath}`,          // Nfts directory at root
        `${originalPath}`,                // Just the filename
        `./assets/nfts/${originalPath}`,  // Relative path
        `../assets/nfts/${originalPath}`, // Up one directory
        `/public/assets/nfts/${originalPath}` // Public assets
      ];
    }
    
    // If it already has a path, still provide some alternatives
    return [originalPath];
  };
  
  // Get all possible paths for this model
  const possiblePaths = getPossiblePaths(path);
  
  // Get the current path to try based on our attempt index
  const currentPathToTry = possiblePaths[pathAttemptIndex % possiblePaths.length];
  
  // Effect to try the next path if the current one fails
  useEffect(() => {
    if (error && pathAttemptIndex < possiblePaths.length - 1) {
      // Try the next path
      const timerId = setTimeout(() => {
        console.log(`Path ${currentPathToTry} failed, trying next path...`);
        setError(false);
        setPathAttemptIndex(prev => prev + 1);
      }, 500);
      
      return () => clearTimeout(timerId);
    }
  }, [error, pathAttemptIndex, possiblePaths.length, currentPathToTry]);
  
  // Log the current path we're trying
  console.log(`Loading 3D model - Attempt ${pathAttemptIndex + 1}/${possiblePaths.length}`, {
    original: path,
    current: currentPathToTry,
    allPaths: possiblePaths
  });
  
  // Load the model with the current path
  const gltf = useGLTF(currentPathToTry, undefined, undefined, (e) => {
    console.error(`Failed to load model from ${currentPathToTry}:`, e);
    
    // Set error state to trigger our retry effect
    setError(true);
  });

  // Auto-rotation effect
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  // Show fallback if model fails to load
  if (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff5500" />
      </mesh>
    );
  }

  // Center the model
  useEffect(() => {
    try {
      if (gltf && gltf.scene) {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);
      }
    } catch (e) {
      console.warn('Error centering model:', e);
    }
  }, [gltf]);

  return (
    <group ref={group} scale={1.5}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// Main ModelViewer component
export default function ModelViewer({ modelPath, backgroundColor = '#1a1a20', height = 200 }) {
  const [canvasError, setCanvasError] = useState(false);

  // Simple fallback component when 3D fails
  const Fallback = () => (
    <div style={{ 
      width: '100%', 
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#aaa'
    }}>
      <img 
        src="/assets/fallbacks/model-fallback.svg" 
        alt="3D Preview Unavailable" 
        style={{ 
          width: '80%', 
          height: 'auto',
          maxHeight: '80%'
        }} 
      />
    </div>
  );

  return (
    <div style={{ 
      width: '100%', 
      height, 
      backgroundColor,
      borderRadius: '8px 8px 0 0',
      overflow: 'hidden'
    }}>
      {canvasError ? (
        <Fallback />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          gl={{ 
            preserveDrawingBuffer: true,
            powerPreference: 'default',
            failIfMajorPerformanceCaveat: false
          }}
          onCreated={state => {
            state.gl.setClearColor(new THREE.Color(backgroundColor));
          }}
        >
          <Suspense fallback={
            <mesh>
              <sphereGeometry args={[0.5, 16, 16]} />
              <meshBasicMaterial color="#333333" wireframe />
            </mesh>
          }>
            <ErrorBoundary onError={() => setCanvasError(true)}>
              <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 300 }}
              >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Model path={modelPath} />
              </PresentationControls>
              <Environment preset="city" />
            </ErrorBoundary>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}