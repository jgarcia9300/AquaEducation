import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
    <>
      <Environment
        ground={{ height: -26, radius: 260, scale: 260 }}
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path="/acidification/cubemap/"
        background={true}
      />
    </>
  );
};

export default Staging;
