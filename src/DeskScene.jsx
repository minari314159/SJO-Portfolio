import { Suspense, useRef, useState } from "react";
import { useGLTF, Float, useScroll } from "@react-three/drei";

import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { useFrame } from "@react-three/fiber";

const DeskScene = () => {
  const { nodes, materials } = useGLTF("/old_desk.gltf");

  const data = useScroll();
  const [section, setSection] = useState(0);

  const model = useRef();
  const monitor = useRef();

  const framerMotionConfig = {
    type: "spring",
    mass: 5,
    stiffness: 600,
    damping: 90,
    restDelta: 0.05,
    duration: 0.5,
  };

  useFrame((state) => {
    let currentSection = Math.floor(data.scroll.current * data.pages);
    if (currentSection > 2) {
      currentSection = 2;
    }
    if (currentSection != section) {
      setSection(currentSection);
    }
  });

  return (
    <MotionConfig transition={framerMotionConfig}>
      <Suspense fallback={null}>
        <motion.group
          name="Scene_1"
          ref={model}
          scale={0}
          position={[0.88, 0, 0]}
          rotation={[0, -0.26, 0]}
          initial={{ opacity: 0 }}
          animate={"" + section}
          variants={{
            0: {
              x: 0.88,
              y: 0,
              z: 0,
              opacity: 1,
              scale: 0.005,
              rotateY: -0.26,
              transition: { duration: 1, delay: 0.5 },
            },
            1: {
              x: 1.3,
              y: -0.05,
              z: 1.4,
              scale: 0.006,
              rotateY: 0.79,
              rotateZ: 0.04,
              rotateX: -0.05,
              transition: { duration: 1, delay: 0.5 },
            },
            2: {
              x: 1.73,
              y: -0.33,
              z: 2,
              scale: 0.008,
              rotateY: 0.75,
              rotateZ: 0.21,
              rotateX: -0.3,
              transition: { duration: 1, delay: 0.5 },
            },
          }}
        >
          {/* Chair */}
          <Float rotationIntensity={0.2}>
            <motion.group
              name="chair"
              position={[-4.1, 52.9, 122.9]}
              rotation={[-Math.PI, 0.5, -Math.PI]}
              scale={0.3}
              initial={{ x: -4.1, y: 52.9, z: 122.9, scale: 0 }}
              animate={"" + section}
              variants={{
                0: {
                  scale: 0.3,
                  rotateY: 1,
                  x: -15,
                  transition: { duration: 1, delay: 0.8 },
                },
                1: {
                  scale: 0.3,
                  rotateY: 1,
                  x: -15,
                  transition: { duration: 1, delay: 0.8 },
                },
                2: {
                  scale: 0.3,
                  rotateY: 1,
                  x: -15,
                  transition: { duration: 1, delay: 0.8 },
                },
              }}
            >
              <mesh
                name="Wood_Chair"
                castShadow
                receiveShadow
                geometry={nodes.Wood_Chair.geometry}
                material={nodes.Wood_Chair.material}
                position={[5.8, -12, -20.9]}
                rotation={[-Math.PI, -0.5, -Math.PI]}
                scale={3.4}
              />
              <mesh
                name="pilow"
                castShadow
                receiveShadow
                geometry={nodes.pilow.geometry}
                material={nodes.pilow.material}
                position={[1.5, 48.8, 16.8]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1.5}
              />
              <mesh
                name="back"
                castShadow
                receiveShadow
                geometry={nodes.back.geometry}
                material={nodes.back.material}
                position={[71, 153.3, 63.6]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1.5}
              />
            </motion.group>
          </Float>
          {/* KeyBoard */}
          <motion.group
            name="KeyBoard"
            position={[18.7, 131, 25]}
            rotation={[0.2, 0, 0]}
            scale={0.18}
            initial={{ scale: 0, y: 130 }}
            animate={"" + section}
            variants={{
              0: {
                scale: 0.18,
                y: 131,
                transition: { duration: 1, delay: 0.4 },
              },
              1: {
                scale: 0.18,
                y: 131,
                transition: { duration: 1, delay: 0.4 },
              },
              2: {
                scale: 0.18,
                y: 131,
                transition: { duration: 1, delay: 0.4 },
              },
            }}
          >
            <mesh
              name="Merged_Geometry"
              castShadow
              receiveShadow
              geometry={nodes.Merged_Geometry.geometry}
              material={nodes.Merged_Geometry.material}
              position={[0, -110.4, -0.2]}
              rotation={[-0.1, 0, 0]}
              scale={6.1}
            />
            <group name="ShiftR" position={[190.1, -95.5, 22]}>
              <mesh
                name="shift_2"
                castShadow
                receiveShadow
                geometry={nodes.shift_2.geometry}
                material={nodes.shift_2.material}
                position={[14.7, 14.8, 9.6]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="ShiftR_1"
                castShadow
                receiveShadow
                geometry={nodes.ShiftR_1.geometry}
                material={nodes.ShiftR_1.material}
                position={[0, 1.2, -0.1]}
                scale={[4.9, 0.9, 1]}
              />
            </group>
            <group name="ShiftL" position={[-188.1, -95.4, 22]}>
              <mesh
                name="shift"
                castShadow
                receiveShadow
                geometry={nodes.shift.geometry}
                material={nodes.shift.material}
                position={[-15.6, 14.8, 9.6]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="ShiftL_1"
                castShadow
                receiveShadow
                geometry={nodes.ShiftL_1.geometry}
                material={nodes.ShiftL_1.material}
                position={[0, 1.2, -0.1]}
                scale={[4.9, 0.9, 1]}
              />
            </group>
            <group name="return" position={[196.5, -95.4, -17.3]}>
              <mesh
                name="return_1"
                castShadow
                receiveShadow
                geometry={nodes.return_1.geometry}
                material={nodes.return_1.material}
                position={[4.4, 14.8, 9.6]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Return"
                castShadow
                receiveShadow
                geometry={nodes.Return.geometry}
                material={nodes.Return.material}
                position={[0, 1.2, -0.1]}
                scale={[4.9, 0.9, 1]}
              />
            </group>
            <group name="caps" position={[-199.3, -95.4, -17.3]}>
              <mesh
                name="caps_1"
                castShadow
                receiveShadow
                geometry={nodes.caps_1.geometry}
                material={nodes.caps_1.material}
                position={[-8, 14.8, 9.6]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Cap"
                castShadow
                receiveShadow
                geometry={nodes.Cap.geometry}
                material={nodes.Cap.material}
                position={[0, 1.2, -0.1]}
                scale={[4.9, 0.9, 1]}
              />
            </group>
            <group name="Tab" position={[-206.7, -95.4, -57]}>
              <mesh
                name="Tab_1"
                castShadow
                receiveShadow
                geometry={nodes.Tab_1.geometry}
                material={nodes.Tab_1.material}
                position={[-0.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Tab_2"
                castShadow
                receiveShadow
                geometry={nodes.Tab_2.geometry}
                material={nodes.Tab_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="del" position={[208.6, -95.4, -57]}>
              <mesh
                name="Del"
                castShadow
                receiveShadow
                geometry={nodes.Del.geometry}
                material={nodes.Del.material}
                position={[5.2, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Del_1"
                castShadow
                receiveShadow
                geometry={nodes.Del_1.geometry}
                material={nodes.Del_1.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="P" position={[171.7, -95.4, -57]}>
              <mesh
                name="P_1"
                castShadow
                receiveShadow
                geometry={nodes.P_1.geometry}
                material={nodes.P_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="P_2"
                castShadow
                receiveShadow
                geometry={nodes.P_2.geometry}
                material={nodes.P_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="L" position={[146.3, -95.4, -17.1]}>
              <mesh
                name="L_1"
                castShadow
                receiveShadow
                geometry={nodes.L_1.geometry}
                material={nodes.L_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="L_2"
                castShadow
                receiveShadow
                geometry={nodes.L_2.geometry}
                material={nodes.L_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="?" position={[132.8, -95.4, 21.1]}>
              <mesh
                name="?_1"
                castShadow
                receiveShadow
                geometry={nodes["?_1"].geometry}
                material={nodes["?_1"].material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="?_2"
                castShadow
                receiveShadow
                geometry={nodes["?_2"].geometry}
                material={nodes["?_2"].material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="M" position={[94.9, -95.4, 21.1]}>
              <mesh
                name="M_1"
                castShadow
                receiveShadow
                geometry={nodes.M_1.geometry}
                material={nodes.M_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="M_2"
                castShadow
                receiveShadow
                geometry={nodes.M_2.geometry}
                material={nodes.M_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="O" position={[134.3, -95.4, -57]}>
              <mesh
                name="O_1"
                castShadow
                receiveShadow
                geometry={nodes.O_1.geometry}
                material={nodes.O_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="O_2"
                castShadow
                receiveShadow
                geometry={nodes.O_2.geometry}
                material={nodes.O_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="K" position={[108.9, -95.4, -17.1]}>
              <mesh
                name="K_1"
                castShadow
                receiveShadow
                geometry={nodes.K_1.geometry}
                material={nodes.K_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="K_2"
                castShadow
                receiveShadow
                geometry={nodes.K_2.geometry}
                material={nodes.K_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="N" position={[57.5, -95.4, 21.1]}>
              <mesh
                name="N_1"
                castShadow
                receiveShadow
                geometry={nodes.N_1.geometry}
                material={nodes.N_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="N_2"
                castShadow
                receiveShadow
                geometry={nodes.N_2.geometry}
                material={nodes.N_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="U" position={[59, -95.4, -57]}>
              <mesh
                name="U_1"
                castShadow
                receiveShadow
                geometry={nodes.U_1.geometry}
                material={nodes.U_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="U_2"
                castShadow
                receiveShadow
                geometry={nodes.U_2.geometry}
                material={nodes.U_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="H" position={[33.6, -95.4, -17.1]}>
              <mesh
                name="H_1"
                castShadow
                receiveShadow
                geometry={nodes.H_1.geometry}
                material={nodes.H_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="H_2"
                castShadow
                receiveShadow
                geometry={nodes.H_2.geometry}
                material={nodes.H_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="V" position={[-17.8, -95.4, 21.1]}>
              <mesh
                name="V_1"
                castShadow
                receiveShadow
                geometry={nodes.V_1.geometry}
                material={nodes.V_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="V_2"
                castShadow
                receiveShadow
                geometry={nodes.V_2.geometry}
                material={nodes.V_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="E" position={[-90.5, -95.4, -57]}>
              <mesh
                name="E_1"
                castShadow
                receiveShadow
                geometry={nodes.E_1.geometry}
                material={nodes.E_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="E_2"
                castShadow
                receiveShadow
                geometry={nodes.E_2.geometry}
                material={nodes.E_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="S" position={[-115.9, 115.9, -17.1]}>
              <mesh
                name="S_1"
                castShadow
                receiveShadow
                geometry={nodes.S_1.geometry}
                material={nodes.S_1.material}
                position={[-4.5, -197.3, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="S_2"
                castShadow
                receiveShadow
                geometry={nodes.S_2.geometry}
                material={nodes.S_2.material}
                position={[0, -210.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="T" position={[-16, -95.6, -57]}>
              <mesh
                name="T_1"
                castShadow
                receiveShadow
                geometry={nodes.T_1.geometry}
                material={nodes.T_1.material}
                position={[-4.5, 14.7, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="T_2"
                castShadow
                receiveShadow
                geometry={nodes.T_2.geometry}
                material={nodes.T_2.material}
                position={[0, 1.3, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="F" position={[-41.4, 115.9, -17.1]}>
              <mesh
                name="F_1"
                castShadow
                receiveShadow
                geometry={nodes.F_1.geometry}
                material={nodes.F_1.material}
                position={[-4.5, -192.2, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="F_2"
                castShadow
                receiveShadow
                geometry={nodes.F_2.geometry}
                material={nodes.F_2.material}
                position={[0, -210.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="crtl" position={[-168.8, -95.4, 59.8]}>
              <mesh
                name="Crtl"
                castShadow
                receiveShadow
                geometry={nodes.Crtl.geometry}
                material={nodes.Crtl.material}
                position={[-0.1, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Crtl_1"
                castShadow
                receiveShadow
                geometry={nodes.Crtl_1.geometry}
                material={nodes.Crtl_1.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="Smile_2" position={[-206.7, -95.4, 59.8]}>
              <mesh
                name=")"
                castShadow
                receiveShadow
                geometry={nodes[")"].geometry}
                material={nodes[")"].material}
                position={[-1.5, 14.8, 5.8]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name=")_1"
                castShadow
                receiveShadow
                geometry={nodes[")_1"].geometry}
                material={nodes[")_1"].material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="Smile" position={[208.6, -95.4, 59.8]}>
              <mesh
                name=")_2"
                castShadow
                receiveShadow
                geometry={nodes[")_2"].geometry}
                material={nodes[")_2"].material}
                position={[-1.5, 14.8, 5.8]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name=")_3"
                castShadow
                receiveShadow
                geometry={nodes[")_3"].geometry}
                material={nodes[")_3"].material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="cmd_2" position={[126.6, -95.4, 59.8]}>
              <mesh
                name="CMD"
                castShadow
                receiveShadow
                geometry={nodes.CMD.geometry}
                material={nodes.CMD.material}
                position={[-1.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="CMD_1"
                castShadow
                receiveShadow
                geometry={nodes.CMD_1.geometry}
                material={nodes.CMD_1.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="cmd" position={[-90.2, -95.4, 59.8]}>
              <mesh
                name="CMD_2"
                castShadow
                receiveShadow
                geometry={nodes.CMD_2.geometry}
                material={nodes.CMD_2.material}
                position={[-1.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="CMD_3"
                castShadow
                receiveShadow
                geometry={nodes.CMD_3.geometry}
                material={nodes.CMD_3.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="X" position={[-92.8, -95.4, 21.1]}>
              <mesh
                name="X_1"
                castShadow
                receiveShadow
                geometry={nodes.X_1.geometry}
                material={nodes.X_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="X_2"
                castShadow
                receiveShadow
                geometry={nodes.X_2.geometry}
                material={nodes.X_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="I" position={[97.4, -95.4, -57]}>
              <mesh
                name="I_1"
                castShadow
                receiveShadow
                geometry={nodes.I_1.geometry}
                material={nodes.I_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="I_2"
                castShadow
                receiveShadow
                geometry={nodes.I_2.geometry}
                material={nodes.I_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="J" position={[72, -95.4, -17.1]}>
              <mesh
                name="J_1"
                castShadow
                receiveShadow
                geometry={nodes.J_1.geometry}
                material={nodes.J_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="J_2"
                castShadow
                receiveShadow
                geometry={nodes.J_2.geometry}
                material={nodes.J_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="B" position={[20.6, -95.4, 21.1]}>
              <mesh
                name="B_1"
                castShadow
                receiveShadow
                geometry={nodes.B_1.geometry}
                material={nodes.B_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="B_2"
                castShadow
                receiveShadow
                geometry={nodes.B_2.geometry}
                material={nodes.B_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="Y" position={[22.1, -95.4, -57]}>
              <mesh
                name="Y_1"
                castShadow
                receiveShadow
                geometry={nodes.Y_1.geometry}
                material={nodes.Y_1.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
              <mesh
                name="Y_2"
                castShadow
                receiveShadow
                geometry={nodes.Y_2.geometry}
                material={nodes.Y_2.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="G" position={[-3.3, -95.4, -17.1]}>
              <mesh
                name="G_1"
                castShadow
                receiveShadow
                geometry={nodes.G_1.geometry}
                material={nodes.G_1.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
              <mesh
                name="G_2"
                castShadow
                receiveShadow
                geometry={nodes.G_2.geometry}
                material={nodes.G_2.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <mesh
              name="SpaceBar"
              castShadow
              receiveShadow
              geometry={nodes.SpaceBar.geometry}
              material={nodes.SpaceBar.material}
              position={[18.1, -94.3, 59.8]}
              scale={[4.9, 0.9, 1]}
            />
            <group name="C" position={[-59.2, -80.6, 30.1]}>
              <mesh
                name="C_1"
                castShadow
                receiveShadow
                geometry={nodes.C_1.geometry}
                material={nodes.C_1.material}
                position={[4.5, -13.7, -9]}
                scale={[1, 0.9, 1]}
              />
              <mesh
                name="C_2"
                castShadow
                receiveShadow
                geometry={nodes.C_2.geometry}
                material={nodes.C_2.material}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="Q" position={[-165.7, -95.4, -57]}>
              <mesh
                name="Q_1"
                castShadow
                receiveShadow
                geometry={nodes.Q_1.geometry}
                material={nodes.Q_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Q_2"
                castShadow
                receiveShadow
                geometry={nodes.Q_2.geometry}
                material={nodes.Q_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="W" position={[-131.9, -80.6, -48]}>
              <mesh
                name="W_1"
                castShadow
                receiveShadow
                geometry={nodes.W_1.geometry}
                material={nodes.W_1.material}
                position={[4.5, -13.7, -9]}
                scale={[1, 0.9, 1]}
              />
              <mesh
                name="W_2"
                castShadow
                receiveShadow
                geometry={nodes.W_2.geometry}
                material={nodes.W_2.material}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="A" position={[-152.8, -95.4, -17.1]}>
              <mesh
                name="A_1"
                castShadow
                receiveShadow
                geometry={nodes.A_1.geometry}
                material={nodes.A_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="A_2"
                castShadow
                receiveShadow
                geometry={nodes.A_2.geometry}
                material={nodes.A_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="R" position={[-152.8, -95.4, -17.1]}>
              <mesh
                name="R_1"
                castShadow
                receiveShadow
                geometry={nodes.R_1.geometry}
                material={nodes.R_1.material}
                position={[99.9, 1.2, -39.9]}
                scale={[1, 0.9, 1]}
              />
              <mesh
                name="R_2"
                castShadow
                receiveShadow
                geometry={nodes.R_2.geometry}
                material={nodes.R_2.material}
                position={[95.4, 14.8, -30.9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="D" position={[-78.3, -95.4, -17.1]}>
              <mesh
                name="D_1"
                castShadow
                receiveShadow
                geometry={nodes.D_1.geometry}
                material={nodes.D_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="D_2"
                castShadow
                receiveShadow
                geometry={nodes.D_2.geometry}
                material={nodes.D_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="alt_2" position={[168.3, -95.4, 59.8]}>
              <mesh
                name="alt"
                castShadow
                receiveShadow
                geometry={nodes.alt.geometry}
                material={nodes.alt.material}
                position={[-3.4, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="alt_1"
                castShadow
                receiveShadow
                geometry={nodes.alt_1.geometry}
                material={nodes.alt_1.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="alt_2" position={[-129.7, -95.4, 59.8]}>
              <mesh
                name="alt_3"
                castShadow
                receiveShadow
                geometry={nodes.alt_3.geometry}
                material={nodes.alt_3.material}
                position={[-3.4, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="alt_4"
                castShadow
                receiveShadow
                geometry={nodes.alt_4.geometry}
                material={nodes.alt_4.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
            <group name="Z" position={[-129.7, -95.4, 21.1]}>
              <mesh
                name="Z_1"
                castShadow
                receiveShadow
                geometry={nodes.Z_1.geometry}
                material={nodes.Z_1.material}
                position={[-4.5, 14.8, 9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Z_2"
                castShadow
                receiveShadow
                geometry={nodes.Z_2.geometry}
                material={nodes.Z_2.material}
                position={[0, 1.2, 0]}
                scale={[1, 0.9, 1]}
              />
            </group>
          </motion.group>

          {/* Mouse */}
          <Float rotationIntensity={0.3}>
            <mesh
              name="Mouse"
              castShadow
              geometry={nodes.Mouse.geometry}
              material={nodes.Mouse.material}
              position={[78.9, 111, 23.9]}
              rotation={[-Math.PI, -0.1, -Math.PI]}
              scale={[0.1, 0.1, 0.2]}
            />
          </Float>

          {/* Moniter */}
          <motion.group
            name="TV_Old"
            ref={monitor}
            position={[23.5, 110.1, -27.4]}
            scale={0.6}
            initial={{ scale: 0 }}
            animate={"" + section}
            variants={{
              0: {
                scale: 0.6,

                transition: { duration: 1, delay: 0.7 },
              },
              1: {
                scale: 0.6,

                transition: { duration: 1, delay: 0.7 },
              },
              2: {
                scale: 0.6,

                transition: { duration: 1, delay: 0.7 },
              },
            }}
          >
            <group
              name="button"
              position={[47.6, 61.9, 23.9]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                name="Merged_Geometry_1"
                castShadow
                geometry={nodes.Merged_Geometry_1.geometry}
                material={nodes.Merged_Geometry_1.material}
                position={[0.4, -16.4, -0.2]}
              />
              <motion.mesh
                name="Cylinder_2"
                castShadow
                geometry={nodes.Cylinder_2.geometry}
                material={nodes.Cylinder_2.material}
                position={[0.5, 4.8, 5.1]}
                rotation={[-2.6, 0, -Math.PI / 2]}
                scale={0.9}
                whileHover={{ rotateX: section === 2 ? -0.5 : 0 }}
                onPointerEnter={() => {
                  document.body.style.cursor = "pointer";
                }}
                onPointerLeave={() => {
                  document.body.style.cursor = "default";
                }}
              />
              <motion.mesh
                name="Cylinder"
                castShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[0.5, 19.8, 5.1]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={0.9}
                whileHover={{ rotateX: section === 2 ? -0.5 : 0 }}
                onPointerEnter={() => {
                  document.body.style.cursor = "pointer";
                }}
                onPointerLeave={() => {
                  document.body.style.cursor = "default";
                }}
              />

              <mesh
                name="Cube_61"
                receiveShadow
                geometry={nodes.Cube_61.geometry}
                material={nodes.Cube_61.material}
                position={[2, 1, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>

            <mesh
              name="Cube_62"
              castShadow
              geometry={nodes.Cube_62.geometry}
              material={nodes.Cube_62.material}
              position={[-1.7, 21, 19.3]}
            />
            <mesh
              name="Cube_60"
              receiveShadow
              geometry={nodes.Cube_60.geometry}
              material={nodes.Cube_60.material}
              position={[-0.9, 55.7, -8.4]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              name="Cube_59"
              castShadow
              receiveShadow
              geometry={nodes.Cube_59.geometry}
              material={nodes.Cube_59.material}
              position={[-0.9, 56, -9.5]}
              rotation={[0, Math.PI / 2, 0]}
            />

            <mesh
              name="Screen"
              castShadow
              receiveShadow
              geometry={nodes.Screen.geometry}
              material={nodes.Screen.material}
              position={[-0.9, 56, -9.5]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 1.1]}
            ></mesh>
          </motion.group>

          {/* Plant */}
          <Float rotationIntensity={0.3}>
            <group
              name="Plant_Plant"
              position={[-67, 111, 3.4]}
              rotation={[0, 0.9, 0]}
              scale={0.2}
            >
              <group name="stems" position={[-3.3, 269.9, -11]}>
                <mesh
                  name="stemv3"
                  castShadow
                  receiveShadow
                  geometry={nodes.stemv3.geometry}
                  material={nodes.stemv3.material}
                  position={[12.9, -122.9, 6.3]}
                  rotation={[-Math.PI / 2, 0.2, -2.3]}
                  scale={0.2}
                />
                <mesh
                  name="stemv2"
                  geometry={nodes.stemv2.geometry}
                  material={nodes.stemv2.material}
                  position={[33.8, -126.1, 11.2]}
                  rotation={[-Math.PI / 2, 0.2, 2.5]}
                  scale={0.1}
                />
                <mesh
                  name="stem"
                  geometry={nodes.stem.geometry}
                  material={nodes.stem.material}
                  position={[5.4, -121.7, 15.9]}
                  rotation={[-Math.PI / 2, -0.2, 0]}
                  scale={0.2}
                />
              </group>
              <mesh
                name="leaves"
                castShadow
                geometry={nodes.leaves.geometry}
                material={nodes.leaves.material}
                position={[0, 285.5, 6.1]}
              />
              <mesh
                name="land"
                receiveShadow
                geometry={nodes.land.geometry}
                material={nodes.land.material}
                position={[0, 147.8, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.7}
              />
              <mesh
                name="Pot"
                castShadow
                geometry={nodes.Pot.geometry}
                material={nodes.Pot.material}
                position={[1.5, 76.2, 0]}
                rotation={[0, -0.5, 0]}
                scale={[4.4, 4.4, 4.3]}
              />
            </group>
          </Float>

          {/* Table */}
          <mesh
            name="Table"
            receiveShadow
            geometry={nodes.Table.geometry}
            material={nodes.Table.material}
            position={[3.6, 53.2, -5.6]}
          />
        </motion.group>
      </Suspense>
    </MotionConfig>
  );
};
useGLTF.preload("/old_desk.gltf");
export default DeskScene;
