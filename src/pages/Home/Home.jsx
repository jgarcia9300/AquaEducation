import "./Home.css";
import Button from "../../components/Button/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { HomeRiverModel } from "./HomeRiverModel";
import { Texto3D } from "../../components/models/text3d/Texto3D";
import Button3D from "../../components/models/button3d/Button3D";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [showButtons, setShowButtons] = useState(false); // Estado para controlar los botones adicionales
  const navigate = useNavigate();

  const handleMainButtonClick = () => {
    setShowButtons(true); // Cambiar el estado a `true` para mostrar los tres botones adicionales
  };

  return (
    <main className="home">
      <Canvas className="home__canvas" camera={{ position: [0, 2, 11], fov: 100 } } shadows>
        <Sky sunPosition={[12, 1, -6]} inclination={0.2} azimuth={180}/>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 0]} 
          intensity={1} 
          castShadow />
        <HomeRiverModel castShadow receiveShadow />
        <Texto3D text={`EL AGUA Y EL MEDIO AMBIENTE`} color={"#0EA2E9"} position={[-9, 5, -3]} />

        {/* Solo mostrar el botón principal si `showButtons` es falso */}
        {!showButtons && (
          <Button3D
            text="COMENZAR"
            onClick={handleMainButtonClick}
            position={[0, -1, 7.2]}
            size={[4, 1, 0.5]}
            colors={{ default: "#ffa833", hovered: "#ff8333" }}
            fontSize={0.5}
            font="/fonts/Poppins-Light.otf"
            fontColor="black"
          />
        )}

        {/* Mostrar los tres botones adicionales si `showButtons` es verdadero */}
        {showButtons && (
          <>
            <Button3D
              text="PROBLEMAS "
              onClick={() => navigate("/problemas-ambientales/contaminacion-del-agua")}
              position={[-4.5, -1, 7.3]}
              size={[4, 1, 0.5]}
              colors={{ default: "#77E0F4", hovered: "#55C0E0" }}
              fontSize={0.5}
              font="/fonts/Poppins-Light.otf"
              fontColor="black"
            />
            <Button3D
              text="EXPLORACIÓN"
              onClick={() => navigate("/exploracion/contaminacion-del-agua")}
              position={[4.5, -1, 7.4]}
              size={[4, 1, 0.5]}
              colors={{ default: "#77E0F4", hovered: "#55C0E0" }}
              fontSize={0.5}
              font="/fonts/Poppins-Light.otf"
              fontColor="black"
            />
          </>
        )}

        <OrbitControls
          maxPolarAngle={Math.PI * 0.45}
          minPolarAngle={Math.PI * 0.45}
          maxDistance={12}
          enablePan={false}
        />
      </Canvas>
    </main>
  );
};

export default Home;
