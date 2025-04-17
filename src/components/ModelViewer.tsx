import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// Preload all models to avoid loading errors later
// This will cache the models so they're available when needed
const modelPaths = [
  '/assets/nfts/21_0524221030.glb',
  '/assets/nfts/lightning.glb', 
  '/assets/nfts/logo_bitnet_wb_0524221043.glb',
  '/assets/nfts/carot_0524221015.glb'
];

// Attempt to preload models (will silently fail if paths are wrong)
modelPaths.forEach(path => {
  try {
    useGLTF.preload(path);
  } catch (e) {
    console.warn(`Failed to preload model: ${path}`, e);
  }
});

// Model component to display a single GLB
function Model({ path, rotation = [0, 0, 0], scale = 1.5, position = [0, 0, 0] }) {
  const group = useRef();
  const [modelError, setModelError] = useState(false);
  
  // Try to load the model with error handling
  let gltfResult;
  try {
    gltfResult = useGLTF(path, undefined, 
      // Success callback
      undefined,
      // Error callback
      (error) => {
        console.error(`Error loading model from ${path}:`, error);
        setModelError(true);
      }
    );
  } catch (error) {
    console.error(`Failed to load model ${path}:`, error);
    setModelError(true);
    // Provide an empty scene as fallback
    gltfResult = { scene: new THREE.Scene() };
  }
  
  // Destructure safely
  const { scene } = gltfResult || { scene: new THREE.Scene() };

  // Auto-rotation effect
  useFrame((state) => {
    if (group.current && !modelError) {
      group.current.rotation.y += 0.005;
    }
  });

  // Center the model
  useEffect(() => {
    if (scene && !modelError) {
      try {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
      } catch (e) {
        console.warn('Error centering model:', e);
      }
    }
  }, [scene, modelError]);

  // Show fallback if model fails to load
  if (modelError) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff5500" />
      </mesh>
    );
  }

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// Global state to manage 3D rendering across all components 
// This prevents WebGL context loss by only loading 3D models when needed
const use3DModels = false; // Set to false to prevent 3D models from loading

// Main ModelViewer component
export default function ModelViewer({ modelPath, backgroundColor = '#1a1a20', height = 200 }) {
  // State to track if there's a complete Canvas error
  const [canvasError, setCanvasError] = useState(false);
  // State to track if we should render 3D content
  const [render3D, setRender3D] = useState(use3DModels);

  // Error boundary for the entire canvas
  useEffect(() => {
    const handleError = (event) => {
      // Check if this is a WebGL context lost event or a Three.js error
      if (event.message && (
          event.message.includes('WebGL') || 
          event.message.includes('THREE') || 
          event.message.includes('GLB')
        )) {
        console.error('Canvas error detected:', event);
        setCanvasError(true);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  // Static fallback image for the model
  const renderFallback = (message = "Load 3D Model") => (
    <div style={{ 
      width: '100%', 
      height, 
      backgroundColor,
      borderRadius: '8px 8px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#aaa',
      flexDirection: 'column'
    }}>
      <div style={{ 
        textAlign: 'center', 
        padding: '10px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '8px',
        width: '80%',
        cursor: !canvasError ? 'pointer' : 'default'
      }}
      onClick={() => {
        if (!canvasError) setRender3D(true);
      }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          style={{ margin: '0 auto 10px' }}
        >
          {canvasError ? (
            // Error icon
            <>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </>
          ) : (
            // 3D cube icon
            <>
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </>
          )}
        </svg>
        <p style={{ margin: 0, fontSize: '12px' }}>
          {canvasError ? "3D Model Unavailable" : message}
        </p>
      </div>
    </div>
  );
  
  // If 3D rendering is disabled or there's an error, show the fallback
  if (canvasError || !render3D) {
    return renderFallback();
  }

  // Try-catch wrapped canvas renderer
  try {
    return (
      <div style={{ 
        width: '100%', 
        height, 
        backgroundColor,
        borderRadius: '8px 8px 0 0',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          gl={{ 
            preserveDrawingBuffer: true,
            // Add WebGL context loss handling
            powerPreference: 'default',
            failIfMajorPerformanceCaveat: false
          }}
          style={{ width: '100%', height: '100%' }}
          onError={(error) => {
            console.error('Canvas render error:', error);
            setCanvasError(true);
          }}
        >
          <Suspense fallback={
            // Show a loading spinner or placeholder
            <mesh>
              <sphereGeometry args={[0.5, 16, 16]} />
              <meshBasicMaterial color="#333333" wireframe />
            </mesh>
          }>
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
          </Suspense>
        </Canvas>
        
        {/* Toggle button to disable 3D and save resources */}
        <button 
          onClick={() => setRender3D(false)} 
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '4px 8px',
            fontSize: '10px',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          Disable 3D
        </button>
      </div>
    );
  } catch (err) {
    console.error('ModelViewer render error:', err);
    setCanvasError(true);
    return renderFallback("3D Loading Failed");
  }
}