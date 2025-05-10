// App.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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
      camera={{ position: [0, 7, 25], fov: 40 }}
      style={{ background: '#eee' }}
      shadows
    >
      {/* Lumières */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} castShadow />

      {/* ✅ Sol réajouté, légèrement surélevé pour recouvrir le sol du modèle */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]} receiveShadow>
        <planeGeometry args={[100, 0,5, 100]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Contrôle caméra */}
      <OrbitControls />

      {/* Scène de concert */}
      <Stage position={[-20, 0, -10]} scale={[5, 5, 5]} />

      {/* Danseurs */}
      {positions.map((pos, i) => (
        <Dancer key={i} position={pos} />
      ))}

      {/* Zombie */}
      <Zombie position={[0, 0, 5]} />
    </Canvas>
  )
}

export default App
