'use client'
import React, { useRef } from 'react'
import { Mesh, Group } from 'three';
import { useTexture } from '@react-three/drei'
import * as THREE from 'three';

import { useFrame } from '@react-three/fiber'


function Cyl() {
  // Load multiple textures
  const textures = useTexture([
    '/image/pic2.png',
  '/image/pic1.png',
  '/image/pic11.png',
  '/image/pic3.png',
  '/image/pic4.png'
  ])

  let ref = useRef<Group>(null)

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.y += delta;
      }
  })

  // Cylinder segments with different textures
  return (
    <group ref={ref} rotation={[0, 1.4, 0.5]}>
      {textures.map((texture, index) => (
        <mesh key={index} position={[0, index * 0.4 , 0]}>
          <cylinderGeometry args={[0.4, 1, 1, 30, 30, true]} />
          <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

export default Cyl
