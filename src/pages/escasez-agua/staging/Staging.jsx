import { Environment } from "@react-three/drei"

function Staging() {
  return (
    <>
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