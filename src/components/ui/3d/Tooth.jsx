import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export default function Tooth({
  position = [0, 0, 0],
  scale = 1,
  type = "molar",
}) {
  const toothRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Floating animation
  useFrame((state) => {
    if (toothRef.current) {
      const t = state.clock.getElapsedTime();
      toothRef.current.position.y = position[1] + Math.sin(t * 2) * 0.05;
      if (hovered) {
        toothRef.current.rotation.y += 0.01;
      }
    }
  });

  // Create different tooth geometries based on type
  const createToothGeometry = () => {
    const tooth = new THREE.Group();

    switch (type) {
      case "incisor": {
        // Flat front tooth
        const incisorCrown = new THREE.BoxGeometry(0.8, 1.2, 0.4);
        const incisorCrownMesh = new THREE.Mesh(
          incisorCrown,
          new THREE.MeshPhysicalMaterial({
            color: "#ffffff",
            roughness: 0.3,
            metalness: 0.1,
            clearcoat: 0.5,
          })
        );
        incisorCrownMesh.position.y = 0.5;
        tooth.add(incisorCrownMesh);

        // Single root
        const incisorRoot = new THREE.ConeGeometry(0.2, 1.5, 32);
        const incisorRootMesh = new THREE.Mesh(
          incisorRoot,
          new THREE.MeshPhysicalMaterial({
            color: "#f0f0f0",
            roughness: 0.5,
            metalness: 0.1,
          })
        );
        incisorRootMesh.position.y = -0.5;
        tooth.add(incisorRootMesh);
        break;
      }

      case "canine": {
        // Pointed crown
        const canineCrown = new THREE.ConeGeometry(0.4, 1, 32);
        const canineCrownMesh = new THREE.Mesh(
          canineCrown,
          new THREE.MeshPhysicalMaterial({
            color: "#ffffff",
            roughness: 0.3,
            metalness: 0.1,
            clearcoat: 0.5,
          })
        );
        canineCrownMesh.position.y = 0.5;
        tooth.add(canineCrownMesh);

        // Long root
        const canineRoot = new THREE.ConeGeometry(0.2, 2, 32);
        const canineRootMesh = new THREE.Mesh(
          canineRoot,
          new THREE.MeshPhysicalMaterial({
            color: "#f0f0f0",
            roughness: 0.5,
            metalness: 0.1,
          })
        );
        canineRootMesh.position.y = -0.8;
        tooth.add(canineRootMesh);
        break;
      }

      default: {
        // molar
        // Wide crown with cusps
        const molarCrown = new THREE.BoxGeometry(1, 0.8, 1);
        const molarCrownMesh = new THREE.Mesh(
          molarCrown,
          new THREE.MeshPhysicalMaterial({
            color: "#ffffff",
            roughness: 0.3,
            metalness: 0.1,
            clearcoat: 0.5,
          })
        );
        molarCrownMesh.position.y = 0.4;
        tooth.add(molarCrownMesh);

        // Multiple roots
        const roots = [
          { x: -0.3, z: -0.3 },
          { x: 0.3, z: -0.3 },
          { x: 0, z: 0.3 },
        ];

        roots.forEach(({ x, z }) => {
          const molarRoot = new THREE.ConeGeometry(0.2, 1.2, 32);
          const molarRootMesh = new THREE.Mesh(
            molarRoot,
            new THREE.MeshPhysicalMaterial({
              color: "#f0f0f0",
              roughness: 0.5,
              metalness: 0.1,
            })
          );
          molarRootMesh.position.set(x, -0.5, z);
          tooth.add(molarRootMesh);
        });
      }
    }

    return tooth;
  };

  const handleClick = () => {
    setClicked(!clicked);
    setShowInfo(!showInfo);
  };

  return (
    <group
      ref={toothRef}
      position={position}
      scale={scale * (hovered ? 1.1 : 1)}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={createToothGeometry()} />

      {showInfo && (
        <Html position={[0, 2, 0]} center>
          <div className="bg-white p-2 rounded-lg shadow-lg text-sm">
            <h3 className="font-bold">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </h3>
            <p className="text-gray-600">Click for more info</p>
          </div>
        </Html>
      )}
    </group>
  );
}
