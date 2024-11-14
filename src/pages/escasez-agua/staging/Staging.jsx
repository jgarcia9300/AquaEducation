import { Environment,
  Sky,
 } from "@react-three/drei"

function Staging() {
  return (
    <>
      {/* <Sky
        sunPosition={[12, 0.2, -6]}
        inclination={0.2}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.05}
        rayleigh={0.6}
        turbidity={1}
      /> */}
     <Environment ground={{
        height:20,
        radius:100,
        scale:100
    }}

    // files={"/hdris/sky/desert-sky/sky_2k.hdr"}
    

    files={
        [
            "px.png",
            "nx.png",
            "py.png",
            "ny.png",
            "pz.png",
            "nz.png",
        ]
    }

    path="/cubemap/sky/desert/"
    background={true}

    /> 
</>

  )
}

export default Staging