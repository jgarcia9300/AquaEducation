// src/pages/ProblemaContaminacion.js
import { Canvas } from '@react-three/fiber';
import IntroWater from '../../../components/models/intro-water/IntroWater';
import './ProblemaContaminacion.css';

const ProblemaContaminacion = () => {
  return (
    <main className="problema-contaminacion">
      <Canvas camera={{ position: [0, 2, 12] }} className="canvas-background">
        <IntroWater />
      </Canvas>
    </main>
  );
};

export default ProblemaContaminacion;
