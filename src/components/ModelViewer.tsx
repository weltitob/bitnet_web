import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// Model component to display a single GLB
function Model({ path, rotation = [0, 0, 0], scale = 1.5, position = [0, 0, 0] }) {
  const group = useRef();
  const [modelError, setModelError] = useState(false);
  
  // Use error boundary pattern for GLTF loading
  const { scene } = useGLTF(path, undefined, 
    // Success callback
    undefined,
    // Error callback
    (error) => {
      console.error(`Error loading model from ${path}:`, error);
      setModelError(true);
    }
  );

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

// Main ModelViewer component
export default function ModelViewer({ modelPath, backgroundColor = '#1a1a20', height = 200 }) {
  // State to track if there's a complete Canvas error
  const [canvasError, setCanvasError] = useState(false);

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

  // Show a fallback if the entire canvas fails
  if (canvasError) {
    return (
      <div style={{ 
        width: '100%', 
        height, 
        backgroundColor,
        borderRadius: '8px 8px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#aaa'
      }}>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            style={{ margin: '0 auto 10px' }}
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <p style={{ margin: 0, fontSize: '12px' }}>3D Model Preview Unavailable</p>
        </div>
      </div>
    );
  }

  // Try-catch wrapped canvas renderer
  try {
    return (
      <div style={{ 
        width: '100%', 
        height, 
        backgroundColor,
        borderRadius: '8px 8px 0 0',
        overflow: 'hidden'
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
      </div>
    );
  } catch (err) {
    console.error('ModelViewer render error:', err);
    // Return the same fallback as above
    return (
      <div style={{ 
        width: '100%', 
        height, 
        backgroundColor,
        borderRadius: '8px 8px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#aaa'
      }}>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            style={{ margin: '0 auto 10px' }}
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <p style={{ margin: 0, fontSize: '12px' }}>3D Model Preview Unavailable</p>
        </div>
      </div>
    );
  }
}