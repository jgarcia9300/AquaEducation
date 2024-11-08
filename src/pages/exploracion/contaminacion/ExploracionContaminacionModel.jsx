import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ExploracionContaminacionModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/Contamination.glb')
  return (
    <group {...props} dispose={null} scale={0.025}>
      <group position={[30.073, -48.859, -0.041]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0.geometry}
          material={materials.M_SandPathEnd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_1.geometry}
          material={materials.M_Sand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_2.geometry}
          material={materials.M_SandPath}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_3.geometry}
          material={materials.M_GrassDirtSandTransition}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_4.geometry}
          material={materials.M_Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_5.geometry}
          material={materials.M_SandGrassTransition}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_6.geometry}
          material={materials.M_Dirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_7.geometry}
          material={materials.M_GrassDirtTransition}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Groundplane_M_SandPathEnd_0_8.geometry}
          material={materials.M_Rocks}
        />
      </group>
      <group position={[30.073, -39.095, -0.041]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Water.geometry}
          material={materials.M_WaterFoam}
          position={[0, 13.182, 0]}
          scale={0.999}
        />
      </group>
      <group position={[30.073, 6.551, -0.041]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Bridge_M_SandyLogs_0.geometry}
          material={materials.M_SandyLogs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Bridge_M_SandyLogs_0_1.geometry}
          material={materials.M_BalconyFloor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Bridge_M_SandyLogs_0_2.geometry}
          material={materials.M_Logs}
        />
      </group>
      <group
        position={[66.83, 177.724, 164.647]}
        rotation={[Math.PI / 2, 0, -2.264]}
        scale={[0.235, 0.208, 0.235]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0.geometry}
          material={materials.M_Decals}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_1.geometry}
          material={materials.M_HousePlanks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_2.geometry}
          material={materials.M_HutWalls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_3.geometry}
          material={materials.M_Logs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_4.geometry}
          material={materials.M_HutRoof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_5.geometry}
          material={materials.M_HutUndersidePlanks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_6.geometry}
          material={materials.M_DoorsWindowsCement}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_7.geometry}
          material={materials.M_SandyLogs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_8.geometry}
          material={materials.M_Workbench}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_9.geometry}
          material={materials.M_Bucket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Drawing2_M_Decals_0_10.geometry}
          material={materials.M_Hammer}
        />
      </group>
      <group position={[30.073, 6.551, -0.041]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_StorageShed_M_DoorsWindowsCement_0.geometry}
          material={materials.M_DoorsWindowsCement}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_StorageShed_M_DoorsWindowsCement_0_1.geometry}
          material={materials.M_StorageShedRoof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_StorageShed_M_DoorsWindowsCement_0_2.geometry}
          material={materials.M_StorageShedWalls}
        />
      </group>
      <group position={[30.073, 6.551, -0.041]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Tree2_M_PalmTreeBark_0.geometry}
          material={materials.M_PalmTreeBark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Tree2_M_PalmTreeBark_0_1.geometry}
          material={materials.M_SandyLogs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_Tree2_M_PalmTreeBark_0_2.geometry}
          material={materials.M_PalmLeaf}
        />
      </group>
      <group position={[30.073, 6.551, -0.041]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0.geometry}
          material={materials.M_HouseWalls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_1.geometry}
          material={materials.M_HouseRoof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_2.geometry}
          material={materials.M_HousePlanks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_3.geometry}
          material={materials.M_DoorsWindowsCement}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_4.geometry}
          material={materials.M_BalconyFloor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_5.geometry}
          material={materials.M_Logs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_6.geometry}
          material={materials.M_StoneBricks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_7.geometry}
          material={materials.M_Chair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_8.geometry}
          material={materials.M_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_House_M_HouseWalls_0_9.geometry}
          material={materials.M_Decals}
        />
      </group>
      <group position={[68.159, 30.917, 52.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0003.geometry}
          material={materials['Object001_mtl.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0003_1.geometry}
          material={materials['Object001_mtl.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0003_2.geometry}
          material={materials['Object001_mtl.002']}
        />
      </group>
      <group position={[8.096, 30.901, 17.357]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0004.geometry}
          material={materials['Object001_mtl.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0004_1.geometry}
          material={materials['Object001_mtl.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0004_2.geometry}
          material={materials['Object001_mtl.006']}
        />
      </group>
      <group position={[42.384, 29.237, -61.216]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0005.geometry}
          material={materials['Object001_mtl.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0005_1.geometry}
          material={materials['Object001_mtl.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0005_2.geometry}
          material={materials['Object001_mtl.009']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolsa2.geometry}
        material={materials['Trash_Kit.001']}
        position={[87.775, 30.723, -26.503]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolsa2001.geometry}
        material={materials['Trash_Kit.002']}
        position={[-8.913, 33.403, 27.954]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolsa2002.geometry}
        material={materials['Trash_Kit.003']}
        position={[25.172, 41.888, 76.002]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP2.geometry}
        material={materials['Trash_Kit.001']}
        position={[78.524, 31.104, 55.504]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP3.geometry}
        material={materials['Trash_Kit.001']}
        position={[29.77, 31.024, -67.919]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP5.geometry}
        material={materials['Trash_Kit.001']}
        position={[93.042, 30.767, -33.031]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Periodico1.geometry}
        material={materials['Trash_Kit.001']}
        position={[96.15, 30.977, -27.685]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolsa1.geometry}
        material={materials['Trash_Kit.001']}
        position={[91.473, 30.637, -29.117]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolsa1001.geometry}
        material={materials['Trash_Kit.003']}
        position={[28.87, 41.803, 73.388]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <group position={[65.511, 29.506, -39.974]} rotation={[-1.497, -0.028, 0.03]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0001.geometry}
          material={materials['Object001_mtl.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0001_1.geometry}
          material={materials['Object001_mtl.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0001_2.geometry}
          material={materials['Object001_mtl.021']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoja1.geometry}
        material={materials['Trash_Kit.001']}
        position={[-0.45, 25.734, -41.318]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoja2.geometry}
        material={materials['Trash_Kit.001']}
        position={[102.242, 27.569, -10.092]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoja3.geometry}
        material={materials['Trash_Kit.001']}
        position={[-6.72, 29.359, -77.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoja4.geometry}
        material={materials['Trash_Kit.001']}
        position={[29.982, 26.262, -31.502]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoja5.geometry}
        material={materials['Trash_Kit.001']}
        position={[94.758, 29.337, -25.639]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoja6.geometry}
        material={materials['Trash_Kit.001']}
        position={[104.118, 29.533, -17.369]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata1.geometry}
        material={materials['Trash_Kit.001']}
        position={[108.065, 28.832, 1.602]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2.geometry}
        material={materials['Trash_Kit.001']}
        position={[104.577, 28.779, 2.647]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata3.geometry}
        material={materials['Trash_Kit.001']}
        position={[118.003, 29.446, -4.37]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata4.geometry}
        material={materials['Trash_Kit.001']}
        position={[44.888, 27.93, -33.413]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata5.geometry}
        material={materials['Trash_Kit.001']}
        position={[40.194, 28.234, -41.318]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata5001.geometry}
        material={materials['Trash_Kit.001']}
        position={[98.056, 28.756, -6.93]}
        rotation={[-2.366, 0.233, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pitillo.geometry}
        material={materials['Trash_Kit.001']}
        position={[106.52, 28.331, -15.779]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vaso.geometry}
        material={materials['Trash_Kit.001']}
        position={[108.69, 27.93, -20.768]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP1.geometry}
        material={materials['Trash_Kit.001']}
        position={[96.831, 28.236, -14.887]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP4.geometry}
        material={materials['Trash_Kit.001']}
        position={[103.058, 28.995, -24.062]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica1.geometry}
        material={materials['Trash_Kit.001']}
        position={[91.944, 29.084, -2.648]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica2.geometry}
        material={materials['Trash_Kit.001']}
        position={[107.05, 28.655, 11.33]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica3.geometry}
        material={materials['Trash_Kit.001']}
        position={[113.033, 28.883, -5.107]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1.geometry}
        material={materials['Trash_Kit.001']}
        position={[103.225, 28.716, 0.987]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP2.geometry}
        material={materials['Trash_Kit.001']}
        position={[106.124, 28.751, 0.573]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP3.geometry}
        material={materials['Trash_Kit.001']}
        position={[32.306, 24.141, -17.365]}
        rotation={[-1.106, 0.402, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP4.geometry}
        material={materials['Trash_Kit.001']}
        position={[115.789, 27.93, -14.227]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP5.geometry}
        material={materials['Trash_Kit.001']}
        position={[24.235, 29.773, -41.318]}
        rotation={[-1.914, -0.247, -0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cigarro.geometry}
        material={materials['Trash_Kit.001']}
        position={[54.791, 31.726, 42.738]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica1001.geometry}
        material={materials['Trash_Kit.004']}
        position={[91.944, 28.739, 32.296]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica1002.geometry}
        material={materials['Trash_Kit.005']}
        position={[33.309, 28.739, -34.344]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica1003.geometry}
        material={materials['Trash_Kit.006']}
        position={[29.458, 28.739, -67.58]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica2001.geometry}
        material={materials['Trash_Kit.007']}
        position={[70.82, 29.051, 11.33]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica2002.geometry}
        material={materials['Trash_Kit.008']}
        position={[22.19, 28.655, -25.03]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica2003.geometry}
        material={materials['Trash_Kit.009']}
        position={[22.19, 28.655, -68.593]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica2004.geometry}
        material={materials['Trash_Kit.010']}
        position={[102.259, 28.655, -20.325]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1001.geometry}
        material={materials['Trash_Kit.011']}
        position={[96.087, 28.317, 19.58]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1002.geometry}
        material={materials['Trash_Kit.012']}
        position={[37.997, 28.689, -36.01]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1003.geometry}
        material={materials['Trash_Kit.013']}
        position={[32.491, 28.689, -28.777]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1004.geometry}
        material={materials['Trash_Kit.014']}
        position={[14.816, 28.689, -28.777]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1005.geometry}
        material={materials['Trash_Kit.015']}
        position={[14.816, 26.336, -40.369]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1006.geometry}
        material={materials['Trash_Kit.016']}
        position={[72.199, 28.317, 31.596]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata1001.geometry}
        material={materials['Trash_Kit.017']}
        position={[96.629, 28.543, 13.447]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata1002.geometry}
        material={materials['Trash_Kit.018']}
        position={[96.629, 28.856, 28.751]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata1003.geometry}
        material={materials['Trash_Kit.019']}
        position={[103.669, 23.34, 28.751]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata1004.geometry}
        material={materials['Trash_Kit.020']}
        position={[80.032, 23.34, 3.967]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata1005.geometry}
        material={materials['Trash_Kit.021']}
        position={[12.894, 23.34, -76.773]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP1001.geometry}
        material={materials['Trash_Kit.042']}
        position={[29.48, 28.236, -16.077]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP1002.geometry}
        material={materials['Trash_Kit.043']}
        position={[12.756, 28.236, -31.125]}
        rotation={[2.052, 0.504, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP1003.geometry}
        material={materials['Trash_Kit.044']}
        position={[12.756, 28.236, -53.606]}
        rotation={[2.052, 0.504, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP1004.geometry}
        material={materials['Trash_Kit.045']}
        position={[84.283, 28.236, -20.066]}
        rotation={[2.052, 0.504, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaP1005.geometry}
        material={materials['Trash_Kit.046']}
        position={[84.283, 28.236, 16.092]}
        rotation={[2.052, 0.504, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica3001.geometry}
        material={materials['Trash_Kit.051']}
        position={[113.033, 27.632, 16.697]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica3002.geometry}
        material={materials['Trash_Kit.052']}
        position={[27.825, 28.214, -7.046]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BolsaPlastica3003.geometry}
        material={materials['Trash_Kit.053']}
        position={[32.387, 28.214, -51.705]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP1007.geometry}
        material={materials['Trash_Kit.041']}
        position={[22.943, 29.12, -61.338]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP2001.geometry}
        material={materials['Trash_Kit.022']}
        position={[98.969, 28.409, 17.302]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP2002.geometry}
        material={materials['Trash_Kit.023']}
        position={[97.528, 28.667, 31.809]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP2003.geometry}
        material={materials['Trash_Kit.024']}
        position={[75.598, 28.667, 35.376]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP2004.geometry}
        material={materials['Trash_Kit.025']}
        position={[47.696, 27.821, -6.634]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP2005.geometry}
        material={materials['Trash_Kit.026']}
        position={[39.364, 26.623, -26.774]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotellaP4001.geometry}
        material={materials['Trash_Kit.054']}
        position={[46.456, 26.886, -16.935]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2001.geometry}
        material={materials['Trash_Kit.032']}
        position={[91.655, 28.779, 2.807]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2002.geometry}
        material={materials['Trash_Kit.033']}
        position={[74.251, 28.779, 12.666]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2003.geometry}
        material={materials['Trash_Kit.034']}
        position={[97.793, 28.502, 12.828]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2004.geometry}
        material={materials['Trash_Kit.035']}
        position={[97.793, 26.285, 25.902]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2005.geometry}
        material={materials['Trash_Kit.036']}
        position={[66.039, 26.285, 20.173]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2006.geometry}
        material={materials['Trash_Kit.037']}
        position={[21.446, 26.285, -22.356]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2007.geometry}
        material={materials['Trash_Kit.038']}
        position={[52.344, 26.285, -22.356]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2008.geometry}
        material={materials['Trash_Kit.039']}
        position={[52.344, 28.376, -32.193]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata2009.geometry}
        material={materials['Trash_Kit.040']}
        position={[22.581, 28.902, -69.963]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata5002.geometry}
        material={materials['Trash_Kit.027']}
        position={[98.056, 28.053, 28.426]}
        rotation={[-2.366, 0.233, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata5003.geometry}
        material={materials['Trash_Kit.028']}
        position={[67.514, 28.053, 28.426]}
        rotation={[-2.366, 0.233, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata5004.geometry}
        material={materials['Trash_Kit.029']}
        position={[36.357, 26, -16.027]}
        rotation={[-0.763, 0.097, -0.052]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata5005.geometry}
        material={materials['Trash_Kit.030']}
        position={[36.357, 26, -41.765]}
        rotation={[-0.763, 0.097, -0.052]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lata5006.geometry}
        material={materials['Trash_Kit.031']}
        position={[-2.058, 26, -41.765]}
        rotation={[-0.763, 0.097, -0.052]}
      />
      <group position={[71.095, 27.668, -1.086]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0007.geometry}
          material={materials['Object001_mtl.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0007_1.geometry}
          material={materials['Object001_mtl.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0007_2.geometry}
          material={materials['Object001_mtl.015']}
        />
      </group>
      <group position={[3.288, 28.271, -64.743]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0008.geometry}
          material={materials['Object001_mtl.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0008_1.geometry}
          material={materials['Object001_mtl.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Object001_mtl_0008_2.geometry}
          material={materials['Object001_mtl.018']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boat.geometry}
        material={materials.M_Boat}
        position={[30.073, 8.09, -0.041]}
        scale={0.1}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Contamination.glb')
