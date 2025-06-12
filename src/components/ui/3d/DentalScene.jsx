import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  useGLTF,
  Stage,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-gray-600">Loading model...</p>
      </div>
    </Html>
  );
}

function TeethModel() {
  const { scene, materials } = useGLTF("/models/teeth/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Enhanced materials
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.roughness = 0.3;
          child.material.metalness = 0.4;
          child.material.clearcoat = 0.5;
          child.material.clearcoatRoughness = 0.2;

          // Add subtle color variations for teeth
          if (child.name.toLowerCase().includes("teeth")) {
            child.material.color = new THREE.Color("#f5f5f5");
            child.material.emissive = new THREE.Color("#1a1a1a");
            child.material.emissiveIntensity = 0.1;
          }
          // Add pinkish tint for gums
          if (child.name.toLowerCase().includes("gum")) {
            child.material.color = new THREE.Color("#ff9e9e");
            child.material.roughness = 0.6;
          }
        }

        if (child.geometry) {
          child.geometry.computeVertexNormals();
        }
      }
    });
  }, [scene]);

  return (
    <>
      <Stage
        environment="city"
        intensity={0.5}
        adjustCamera={false}
        shadows={{
          type: "accumulative",
          color: "pink",
          colorBlend: 2,
          opacity: 1,
        }}
      >
        <primitive
          object={scene}
          scale={2}
          position={[0, -1, 0]}
          rotation={[0, Math.PI, 0]}
        />
      </Stage>
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  );
}

export default function DentalScene() {
  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-50 to-white">
      {" "}
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [5, 2, 5], fov: 45 }}
        shadows="soft"
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        performance={{ min: 0.5 }}
      >
        <OrbitControls
          enableZoom={true}
          maxDistance={20}
          minDistance={2}
          enablePan={true}
          enableRotate={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
          target={[0, 0, 0]}
        />
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
          shadow-bias={-0.0001}
        />
        {/* Teeth Model with Loading State */}
        <Suspense fallback={<Loader />}>
          <TeethModel />
        </Suspense>
        {/* Environment */}
        <Environment preset="studio" />
        <color attach="background" args={["#f8fafc"]} />{" "}
      </Canvas>
      {/* Overlay */}
      <div className="absolute bottom-4 left-4 right-4 text-center text-sm bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <p className="font-medium text-gray-800 mb-1">
          3D Dental Visualization
        </p>
        <p className="text-gray-600">
          Drag to rotate • Scroll to zoom • Double click to reset view
        </p>
      </div>
    </div>
  );
}
