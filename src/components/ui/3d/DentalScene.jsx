import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { TextureLoader } from "three";
import { Suspense } from "react";

function TeethModel() {
  const texture = useLoader(TextureLoader, "/Images/Teeth.png");

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[8, 6]} /> {/* Adjust size as needed */}
      <meshStandardMaterial
        map={texture}
        transparent={true}
        side={2} // Render both sides
      />
    </mesh>
  );
}

export default function DentalScene() {
  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-50 to-white">
      {" "}
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls
          enableZoom={true}
          maxDistance={15}
          minDistance={4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
        />

        {/* Lighting Setup */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />

        {/* Teeth Model */}
        <Suspense fallback={null}>
          <TeethModel />
        </Suspense>

        {/* Environment */}
        <Environment preset="studio" />
        <color attach="background" args={["#f8fafc"]} />
      </Canvas>{" "}
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
