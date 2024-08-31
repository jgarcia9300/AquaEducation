import React from 'react'
import styles from './Torus.module.css'

const Torus = () => {
  return (
    <mesh>
      <torusGeometry args={[1, 0.5, 16, 32]} />
      <meshPhongMaterial color={'red'} />
    </mesh>
  )
}
export default Torus
