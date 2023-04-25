
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Trident(props) {
  const { nodes, materials } = useGLTF("/trident.glb");
  const trident = useRef(null)

  useFrame(() => {
    let j = trident.current.rotation.y
    let k = 1 / 120
    trident.current.rotation.y = (j+=k)
  })

  return (
    <group {...props} dispose={null} ref={trident}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.003"]}
        position={[0, -1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={70.54}
      />
    </group>
  );
}

useGLTF.preload("/trident.glb");