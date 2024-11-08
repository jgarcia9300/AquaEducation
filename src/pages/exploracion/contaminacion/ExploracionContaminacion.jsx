import React from 'react';
import { ExploracionContaminacionModel } from './ExploracionContaminacionModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

export const ExploracionContaminacion = () => {
  return (
    <Canvas camera={{ position: [0, 2, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 3, 7]}
        intensity={1}
        castShadow
        shadow-mapSize-width={4000}
        shadow-mapSize-height={1024}
      />
      <OrbitControls />
      
      <ExploracionContaminacionModel />

    <Html position={[1, 1, 0]} center>
      <div style={{ color: 'black', padding: '1em', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5em', margin: '0' }}>Contaminación del Agua</h1>
        <p style={{ fontSize: '1em', margin: '0.5em 0 0' }}>
          La contaminación del agua afecta la calidad de nuestros recursos hídricos, poniendo en riesgo
          la salud de ecosistemas acuáticos y de las comunidades que dependen de ellos. Es fundamental
          proteger nuestras fuentes de agua para un futuro sostenible.
        </p>
        <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '0.5em 1em', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Leer más</button>
      </div>
    </Html>
    </Canvas>
  );
};
