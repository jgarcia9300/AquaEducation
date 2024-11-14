import { Environment,
  Sky,
 } from "@react-three/drei"

function Staging() {
  return (
    <>
      <Sky
        sunPosition={[12, 0.2, -6]}
        inclination={0.2}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.05}
        rayleigh={0.6}
        turbidity={1}
      />
      </>
    )}
export default Staging