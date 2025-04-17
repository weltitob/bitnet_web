import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// Model component to display a single GLB
function Model({ path, rotation = [0, 0, 0], scale = 1.5, position = [0, 0, 0] }) {
  const group = useRef();
  const { scene } = useGLTF(path);

  // Auto-rotation effect
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  // Center the model
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.sub(center);
    }
  }, [scene]);

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// Main ModelViewer component
export default function ModelViewer({ modelPath, backgroundColor = '#1a1a20', height = 200 }) {
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
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
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
}