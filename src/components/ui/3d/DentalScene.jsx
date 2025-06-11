import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Text,
} from "@react-three/drei";
import Tooth from "./Tooth";

export default function DentalScene() {
  // Create arrays for upper and lower teeth positions
  const upperTeethPositions = [
    { pos: [-3, 1, 0], type: "molar" },
    { pos: [-2, 1, 0], type: "canine" },
    { pos: [-1, 1, 0], type: "incisor" },
    { pos: [1, 1, 0], type: "incisor" },
    { pos: [2, 1, 0], type: "canine" },
    { pos: [3, 1, 0], type: "molar" },
  ];

  const lowerTeethPositions = [
    { pos: [-3, -1, 0], type: "molar" },
    { pos: [-2, -1, 0], type: "canine" },
    { pos: [-1, -1, 0], type: "incisor" },
    { pos: [1, -1, 0], type: "incisor" },
    { pos: [2, -1, 0], type: "canine" },
    { pos: [3, -1, 0], type: "molar" },
  ];

  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-50 to-white">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <OrbitControls
          enableZoom={true}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
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

        {/* Upper Teeth Row */}
        <group position={[0, 0, 0]}>
          {upperTeethPositions.map((tooth, index) => (
            <Tooth
              key={`upper-${index}`}
              position={tooth.pos}
              scale={0.7}
              type={tooth.type}
            />
          ))}
          <Text
            position={[0, 2.5, 0]}
            fontSize={0.5}
            color="#475569"
            anchorX="center"
            anchorY="middle"
          >
            Upper Teeth
          </Text>
        </group>

        {/* Lower Teeth Row */}
        <group position={[0, 0, 0]}>
          {lowerTeethPositions.map((tooth, index) => (
            <Tooth
              key={`lower-${index}`}
              position={tooth.pos}
              scale={0.7}
              type={tooth.type}
            />
          ))}
          <Text
            position={[0, -2.5, 0]}
            fontSize={0.5}
            color="#475569"
            anchorX="center"
            anchorY="middle"
          >
            Lower Teeth
          </Text>
        </group>

        {/* Environment and Background */}
        <Environment preset="studio" />
        <color attach="background" args={["#f8fafc"]} />

        {/* Enhanced Ground Reflection */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial
            color="#f1f5f9"
            metalness={0.3}
            roughness={0.7}
            envMapIntensity={0.5}
          />
        </mesh>
      </Canvas>

      {/* Enhanced Overlay */}
      <div className="absolute bottom-4 left-4 right-4 text-center text-sm bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <p className="font-medium text-gray-800 mb-1">
          Interactive 3D Dental Model
        </p>
        <p className="text-gray-600">
          Drag to rotate • Scroll to zoom • Click on teeth for details
        </p>
      </div>
    </div>
  );
}
