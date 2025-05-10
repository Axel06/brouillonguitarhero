import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Dancer from './components/Dancer'
import Zombie from './components/Zombie'
import Stage from './components/Stage'

function App() {
  const positions = [
    [-3, 0, -10],
    [3, 0, -10],
    [-6, 0, -8],
    [6, 0, -8],
    [0, 0, -6],
  ]

  return (
    <Canvas
      shadows
      camera={{ position: [0, 7, 25], fov: 40 }}
      style={{ background: '#111' }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
    >
      {/* 🎵 Brume légère */}
      <fog attach="fog" args={['#111', 20, 500]} />


      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} castShadow />

      {/* Sol */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <boxGeometry args={[400, 1, 400]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      <OrbitControls />

      <Stage position={[-30, 0, -10]} scale={[5, 5, 5]} />

      {positions.map((pos, i) => (
        <Dancer key={i} position={pos} />
      ))}

      <Zombie position={[0, 0, 5]} />
    </Canvas>
  )
}

export default App
