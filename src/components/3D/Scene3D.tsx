import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Mesh } from "three";

export const Hero3D = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
        gl={{ 
          antialias: false, 
          powerPreference: "low-power",
          failIfMajorPerformanceCaveat: true 
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 32, 32]} scale={1.5}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere args={[0.5, 32, 32]} scale={0.6} position={[2.5, 1, -2]}>
            <MeshDistortMaterial
              color="#60a5fa"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={0.3}
              metalness={0.6}
            />
          </Sphere>
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export const FloatingShapes = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas 
        camera={{ position: [0, 0, 8] }}
        gl={{ 
          antialias: false, 
          powerPreference: "low-power",
          failIfMajorPerformanceCaveat: true 
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
          <Sphere args={[0.8, 32, 32]} position={[-2, 1, 0]}>
            <meshStandardMaterial color="#3b82f6" wireframe />
          </Sphere>
        </Float>
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[0.6, 32, 32]} position={[2, -1, 0]}>
            <meshStandardMaterial color="#60a5fa" wireframe />
          </Sphere>
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};
