// src/pages/ProblemaContaminacion.js
import { Canvas } from '@react-three/fiber';
import IntroWater from './IntroWater.jsx';
import './ProblemaContaminacion.css';

/**
 * ProblemaContaminacion component.
 *
 * This component renders the scene with a 3D animation of water pollution.
 *
 * @return {JSX.Element} The JSX element representing the component.
 */
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
