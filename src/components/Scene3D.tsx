import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const FloatingBlob = ({ position, color, speed, distort }: { position: [number, number, number]; color: string; speed: number; distort: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.35}
          distort={distort}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.6, 0.25, 16, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.4} roughness={0.3} metalness={0.1} />
      </mesh>
    </Float>
  );
};

const FloatingBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color={color} transparent opacity={0.3} roughness={0.2} metalness={0.1} />
      </mesh>
    </Float>
  );
};

export const Scene3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />

          <FloatingBlob position={[3, 1.5, -1]} color="#a3d977" speed={1.2} distort={0.4} />
          <FloatingBlob position={[-3.5, -1, 0]} color="#c8e6a0" speed={0.8} distort={0.3} />
          <FloatingTorus position={[2.5, -2, -0.5]} color="#e8d44d" />
          <FloatingBox position={[-2.5, 2, -1]} color="#2d6a30" />
          <FloatingBlob position={[0, -3, -2]} color="#f0e6c0" speed={0.6} distort={0.5} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export const MiniScene3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`pointer-events-none ${className}`}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 1.5]}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} intensity={0.6} />
          <FloatingBlob position={[0, 0, 0]} color="#2d6a30" speed={1} distort={0.5} />
          <FloatingTorus position={[1.5, -0.8, -0.5]} color="#a3d977" />
        </Canvas>
      </Suspense>
    </div>
  );
};
