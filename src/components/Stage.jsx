// components/Stage.jsx
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Stage({ position = [0, 0, 0], scale = [1, 1, 1] }) {
  const ref = useRef()
  const { scene } = useGLTF('/models/stage.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    // Centrage du modèle
    const box = new THREE.Box3().setFromObject(scene)
    const center = new THREE.Vector3()
    const size = new THREE.Vector3()
    box.getCenter(center)
    box.getSize(size)

    scene.position.sub(center)
    scene.position.y += size.y / 2
  }, [scene])

  return (
    <group ref={ref} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}
