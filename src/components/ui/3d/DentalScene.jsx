import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  useGLTF,
  useTexture,
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
  const modelPath = "/models/teeth/scene.gltf";
  const { scene } = useGLTF(modelPath, true);
  const textures = useTexture({
    gums: "/models/teeth/textures/Gums_diffuse.png",
    tongue: "/models/teeth/textures/Tongue_diffuse.png",
  });
  useEffect(() => {
    if (!textures.gums || !textures.tongue) return;

    // Configure textures
    Object.values(textures).forEach((texture) => {
      if (texture) {
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.needsUpdate = true;
      }
    });

    scene.traverse((child) => {
      if (child.isMesh) {
        // Enhanced materials
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          // Base material properties
          child.material.roughness = 0.3;
          child.material.metalness = 0.2;
          child.material.clearcoat = 0.8;
          child.material.clearcoatRoughness = 0.1;

          // Apply specific textures and properties based on mesh name
          if (child.name.toLowerCase().includes("teeth")) {
            child.material.color = new THREE.Color("#ffffff");
            child.material.emissive = new THREE.Color("#1a1a1a");
            child.material.emissiveIntensity = 0.05;
            child.material.roughness = 0.2;
            child.material.metalness = 0.3;
            child.material.clearcoat = 1;
          } // Apply gums texture and properties
          if (child.name.toLowerCase().includes("gum") && textures.gums) {
            child.material.map = textures.gums;
            child.material.roughness = 0.7;
            child.material.metalness = 0.1;
            child.material.clearcoat = 0.3;
          }
          // Apply tongue texture
          if (child.name.toLowerCase().includes("tongue") && textures.tongue) {
            child.material.map = textures.tongue;
            child.material.roughness = 0.8;
            child.material.metalness = 0;
          }
        }

        if (child.geometry) {
          child.geometry.computeVertexNormals();
        }
      }
    });
  }, [scene, textures]);

  return (
    <>
      {" "}
      <Stage
        environment="warehouse"
        intensity={1}
        adjustCamera={false}
        shadows={{
          type: "accumulative",
          color: "#ffd1d1",
          colorBlend: 2,
          opacity: 0.8,
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
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] w-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-50 to-white">
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
      {/* Overlay */}{" "}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center text-xs sm:text-sm bg-white/90 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-lg">
        <p className="font-medium text-gray-800 mb-0.5 sm:mb-1">
          3D Dental Visualization
        </p>
        <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">
          Drag to rotate • Scroll to zoom • Double click to reset view
        </p>
        <p className="text-gray-600 text-xs block sm:hidden">
          Tap and drag to rotate • Pinch to zoom
        </p>
      </div>
    </div>
  );
}
