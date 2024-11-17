const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 0]} intensity={3}
      castShadow
      shadow-camera-left={-50}
      shadow-camera-right={50}
      shadow-camera-top={50}
      shadow-camera-bottom={-50}
      shadow-camera-far={50}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-normalBias={0.2}
      />
    </>
  );
};

export default Lights;
