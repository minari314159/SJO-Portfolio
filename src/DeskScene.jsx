import { useState, useEffect } from "react";
import {
	useGLTF,
	Float,
	Bounds,
	useScroll,
	useTexture,
	Sparkles,
	MeshReflectorMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useAnimation } from "framer-motion";
import { geoVariants } from "./utils/motions";

const DeskScene = ({ ...props }) => {
	const { position } = useControls("Camera", {
		position: {
			value: { x: 0.3, y: 0, z: 0.26 },
			min: [-5, -5, -5],
			max: [5, 5, 5],
		},
	});
	const { nodes, materials, animations } = useGLTF("./model/desk_scene.glb");

	const texture = useTexture("/textures/baked.jpg");
	texture.flipY = false;
	texture.colorSpace = THREE.SRGBColorSpace;

	const data = useScroll();

	const [section, setSection] = useState(0);

	const animate = useAnimation();
	const textureMaterial = new THREE.MeshStandardMaterial({
		map: texture,
	});

	useEffect(() => {
		if (section === 0) {
			animate.start(geoVariants[0]);
		} else if (section === 1) {
			animate.start(geoVariants[1]);
		} else if (section >= 2) {
			animate.start(geoVariants[2]);
		}
	}, [section]);

	useFrame((state) => {
		let currentSection = Math.floor(data.scroll.current * data.pages);

		if (currentSection === 0) {
			setSection(0);
		} else if (currentSection === 1) {
			setSection(1);
		} else if (currentSection >= 2) {
			setSection(2);
		}
	});

	return (
		<group position={[position.x, position.y, position.z]}>
			<motion.group
				name="Node_0"
				scale={0.004}
				{...props}
				dispose={null}
				position={[-0.1, 0, 0.1]}
				initial={geoVariants[0]}
				animate={animate}
				variants={geoVariants}>
				<pointLight
					name="Point"
					intensity={1.2}
					decay={2}
					position={[9.493, 415.479, 76.146]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
				/>
				<group name="Floor" position={[-4.497, -4.551, 82.786]} scale={100}>
					<mesh name="Floor_1" geometry={nodes.Floor_1.geometry} scale={3}>
						<meshPhongMaterial color="#ff0000" opacity={0} transparent />
					</mesh>
					<spotLight
						name="Spot"
						intensity={1}
						angle={0.437}
						penumbra={0.095}
						decay={2}
						position={[0, 4.195, 0]}
						rotation={[-1.681, -0.012, -0.001]}
					/>

					<mesh
						name="Floor_2"
						geometry={nodes.Floor_2.geometry}
						material={materials["Material.020"]}
					/>
					<mesh
						name="Floor_3"
						geometry={nodes.Floor_3.geometry}
						material={materials["Material.022"]}
					/>
					<group
						name="stone_with_moss_4001"
						position={[1.572, -0.014, 0.157]}
						rotation={[0, 0.017, 0]}
						scale={[0.448, 0.725, 0.448]}>
						<mesh
							name="Cube008"
							geometry={nodes.Cube008.geometry}
							material={textureMaterial}
						/>
						<mesh
							name="Cube008_1"
							geometry={nodes.Cube008_1.geometry}
							material={textureMaterial}
						/>
					</group>
					<group
						name="stone_with_moss_5001"
						position={[-1.632, 0.001, -0.135]}
						rotation={[0, 0.017, 0]}
						scale={[0.448, 0.725, 0.448]}>
						<mesh
							name="Cube006"
							geometry={nodes.Cube006.geometry}
							material={textureMaterial}
						/>
						<mesh
							name="Cube006_1"
							geometry={nodes.Cube006_1.geometry}
							material={textureMaterial}
						/>
					</group>
					<group
						name="stone_with_moss_6001"
						position={[-1.715, -0.014, -2.145]}
						rotation={[0, 0.017, 0]}
						scale={[0.448, 0.725, 0.448]}>
						<mesh
							name="Cube005"
							geometry={nodes.Cube005.geometry}
							material={materials["STONE 1.002"]}
						/>
						<mesh
							name="Cube005_1"
							geometry={nodes.Cube005_1.geometry}
							material={textureMaterial}
						/>
					</group>
				</group>
				<group
					name="KeyBoard"
					position={[18.716, 128.393, 20.524]}
					rotation={[0.094, 0, 0]}
					scale={0.164}>
					<group name="?" position={[132.813, -95.45, 21.053]}>
						<mesh
							name="?001"
							geometry={nodes["?001"].geometry}
							material={materials.Material_12}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="?002"
							geometry={nodes["?002"].geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="A" position={[-152.798, -95.45, -17.089]}>
						<mesh
							name="A001"
							geometry={nodes.A001.geometry}
							material={materials.Material_36}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="A002"
							geometry={nodes.A002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="alt_2" position={[168.258, -95.45, 59.812]}>
						<mesh
							name="alt"
							geometry={nodes.alt.geometry}
							material={materials.Material_39}
							position={[-3.401, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="alt001"
							geometry={nodes.alt001.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="alt002" position={[-129.732, -95.45, 59.812]}>
						<mesh
							name="alt003"
							geometry={nodes.alt003.geometry}
							material={materials.Material_40}
							position={[-3.401, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="alt004"
							geometry={nodes.alt004.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="B" position={[20.56, -95.45, 21.053]}>
						<mesh
							name="B001"
							geometry={nodes.B001.geometry}
							material={materials.Material_30}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="B002"
							geometry={nodes.B002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="C" position={[-59.234, -80.622, 30.087]}>
						<mesh
							name="C001"
							geometry={nodes.C001.geometry}
							material={materials.Material_4}
							position={[4.512, -13.666, -9.034]}
							scale={[1, 0.888, 1]}
						/>
						<mesh
							name="C002"
							geometry={nodes.C002.geometry}
							material={materials.Material_33}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					<group name="caps" position={[-199.286, -95.45, -17.319]}>
						<mesh
							name="Cap"
							geometry={nodes.Cap.geometry}
							material={materials.Material_4}
							position={[0, 1.161, -0.13]}
							scale={[4.881, 0.888, 1]}
						/>
						<mesh
							name="caps001"
							geometry={nodes.caps001.geometry}
							material={materials.Material_7}
							position={[-7.956, 14.828, 9.587]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					<group name="cmd" position={[-90.166, -95.448, 59.812]}>
						<mesh
							name="CMD002"
							geometry={nodes.CMD002.geometry}
							material={materials.Material_26}
							position={[-1.505, 14.829, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="CMD003"
							geometry={nodes.CMD003.geometry}
							material={materials.Material_4}
							position={[0, 1.16, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="cmd_2" position={[126.598, -95.448, 59.812]}>
						<mesh
							name="CMD"
							geometry={nodes.CMD.geometry}
							material={materials.Material_25}
							position={[-1.505, 14.829, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="CMD001"
							geometry={nodes.CMD001.geometry}
							material={materials.Material_4}
							position={[0, 1.16, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="crtl" position={[-168.812, -95.448, 59.812]}>
						<mesh
							name="Crtl"
							geometry={nodes.Crtl.geometry}
							material={materials.Material_24}
							position={[-0.095, 14.829, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="Crtl001"
							geometry={nodes.Crtl001.geometry}
							material={materials.Material_4}
							position={[0, 1.16, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="D" position={[-78.33, -95.45, -17.089]}>
						<mesh
							name="D001"
							geometry={nodes.D001.geometry}
							material={materials.Material_38}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="D002"
							geometry={nodes.D002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="del" position={[208.571, -95.45, -57.012]}>
						<mesh
							name="Del"
							geometry={nodes.Del.geometry}
							material={materials.Inner_Monitor}
							position={[5.24, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="Del001"
							geometry={nodes.Del001.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="E" position={[-90.477, -95.45, -57.012]}>
						<mesh
							name="E001"
							geometry={nodes.E001.geometry}
							material={materials.Material_20}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="E002"
							geometry={nodes.E002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="F" position={[-41.416, 115.919, -17.089]}>
						<mesh
							name="F001"
							geometry={nodes.F001.geometry}
							material={materials.Material_23}
							position={[-4.512, -192.17, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="F002"
							geometry={nodes.F002.geometry}
							material={materials.Material_4}
							position={[0, -210.207, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="G" position={[-3.321, -95.45, -17.089]}>
						<mesh
							name="G001"
							geometry={nodes.G001.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
						<mesh
							name="G002"
							geometry={nodes.G002.geometry}
							material={materials.Material_32}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					<group name="H" position={[33.593, -95.45, -17.089]}>
						<mesh
							name="H001"
							geometry={nodes.H001.geometry}
							material={materials.Material_18}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="H002"
							geometry={nodes.H002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="I" position={[97.369, -95.45, -57.012]}>
						<mesh
							name="I001"
							geometry={nodes.I001.geometry}
							material={materials.Material_28}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="I002"
							geometry={nodes.I002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="J" position={[71.962, -95.45, -17.089]}>
						<mesh
							name="J001"
							geometry={nodes.J001.geometry}
							material={materials.Material_29}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="J002"
							geometry={nodes.J002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="K" position={[108.876, -95.45, -17.089]}>
						<mesh
							name="K001"
							geometry={nodes.K001.geometry}
							material={materials.Material_15}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="K002"
							geometry={nodes.K002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="L" position={[146.26, -95.45, -17.089]}>
						<mesh
							name="L001"
							geometry={nodes.L001.geometry}
							material={materials.Material_11}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="L002"
							geometry={nodes.L002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="M" position={[94.859, -95.45, 21.053]}>
						<mesh
							name="M001"
							geometry={nodes.M001.geometry}
							material={materials.Material_13}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="M002"
							geometry={nodes.M002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="N" position={[57.474, -95.45, 21.053]}>
						<mesh
							name="N001"
							geometry={nodes.N001.geometry}
							material={materials.Material_16}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="N002"
							geometry={nodes.N002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="O" position={[134.283, -95.45, -57.012]}>
						<mesh
							name="O001"
							geometry={nodes.O001.geometry}
							material={materials.Material_14}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="O002"
							geometry={nodes.O002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="P" position={[171.668, -95.45, -57.012]}>
						<mesh
							name="P001"
							geometry={nodes.P001.geometry}
							material={materials.Material_10}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="P002"
							geometry={nodes.P002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="Q" position={[-165.744, -95.45, -57.012]}>
						<mesh
							name="Q001"
							geometry={nodes.Q001.geometry}
							material={materials.Material_34}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="Q002"
							geometry={nodes.Q002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="R" position={[-152.798, -95.45, -17.089]}>
						<mesh
							name="R001"
							geometry={nodes.R001.geometry}
							material={materials.Material_4}
							position={[99.876, 1.161, -39.924]}
							scale={[1, 0.888, 1]}
						/>
						<mesh
							name="R002"
							geometry={nodes.R002.geometry}
							material={materials.Material_37}
							position={[95.364, 14.828, -30.89]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					<group name="return" position={[196.532, -95.45, -17.319]}>
						<mesh
							name="Return"
							geometry={nodes.Return.geometry}
							material={materials.Material_4}
							position={[0, 1.161, -0.13]}
							scale={[4.881, 0.888, 1]}
						/>
						<mesh
							name="return001"
							geometry={nodes.return001.geometry}
							material={materials.Material_6}
							position={[4.362, 14.828, 9.587]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					<group name="S" position={[-115.884, 115.919, -17.089]}>
						<mesh
							name="S001"
							geometry={nodes.S001.geometry}
							material={materials.Material_21}
							position={[-4.512, -197.29, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="S002"
							geometry={nodes.S002.geometry}
							material={materials.Material_4}
							position={[0, -210.207, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="ShiftL" position={[-188.107, -95.45, 21.994]}>
						<mesh
							name="shift"
							geometry={nodes.shift.geometry}
							material={materials.Material_5}
							position={[-15.593, 14.828, 9.6]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="ShiftL001"
							geometry={nodes.ShiftL001.geometry}
							material={materials.Material_4}
							position={[0, 1.161, -0.143]}
							scale={[4.881, 0.888, 1]}
						/>
					</group>
					<group name="ShiftR" position={[190.071, -95.45, 21.994]}>
						<mesh
							name="shift_2"
							geometry={nodes.shift_2.geometry}
							material={materials.Material_3}
							position={[14.665, 14.828, 9.6]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="ShiftR001"
							geometry={nodes.ShiftR001.geometry}
							material={materials.Material_4}
							position={[0, 1.161, -0.143]}
							scale={[4.881, 0.888, 1]}
						/>
					</group>
					<group name="Smile" position={[208.571, -95.448, 59.812]}>
						<mesh
							name=")002"
							geometry={nodes[")002"].geometry}
							material={materials.Table}
							position={[-1.498, 14.829, 5.789]}
							rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
						/>
						<mesh
							name=")003"
							geometry={nodes[")003"].geometry}
							material={materials.Material_4}
							position={[0, 1.16, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="Smile_2" position={[-206.721, -95.448, 59.812]}>
						<mesh
							name=")"
							geometry={nodes[")"].geometry}
							material={materials.Keyboard_Mouse}
							position={[-1.498, 14.829, 5.789]}
							rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
						/>
						<mesh
							name=")001"
							geometry={nodes[")001"].geometry}
							material={materials.Material_4}
							position={[0, 1.16, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="T" position={[-16.008, -95.578, -57.012]}>
						<mesh
							name="T001"
							geometry={nodes.T001.geometry}
							material={materials.Material_22}
							position={[-4.512, 14.699, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="T002"
							geometry={nodes.T002.geometry}
							material={materials.Material_4}
							position={[0, 1.29, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="Tab" position={[-206.721, -95.45, -57.012]}>
						<mesh
							name="Tab001"
							geometry={nodes.Tab001.geometry}
							material={materials.Material_8}
							position={[-0.521, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="Tab002"
							geometry={nodes.Tab002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="U" position={[59.001, -95.45, -57.012]}>
						<mesh
							name="U001"
							geometry={nodes.U001.geometry}
							material={materials.Material_17}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="U002"
							geometry={nodes.U002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="V" position={[-17.808, -95.45, 21.053]}>
						<mesh
							name="V001"
							geometry={nodes.V001.geometry}
							material={materials.Material_19}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="V002"
							geometry={nodes.V002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="W" position={[-131.903, -80.622, -47.978]}>
						<mesh
							name="W001"
							geometry={nodes.W001.geometry}
							material={materials.Material_4}
							position={[4.512, -13.666, -9.034]}
							scale={[1, 0.888, 1]}
						/>
						<mesh
							name="W002"
							geometry={nodes.W002.geometry}
							material={materials.Material_35}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					<group name="X" position={[-92.817, -95.45, 21.053]}>
						<mesh
							name="X001"
							geometry={nodes.X001.geometry}
							material={materials.Material_27}
							position={[-4.512, 14.83, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="X002"
							geometry={nodes.X002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<group name="Y" position={[22.087, -95.45, -57.012]}>
						<mesh
							name="Y001"
							geometry={nodes.Y001.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
						<mesh
							name="Y002"
							geometry={nodes.Y002.geometry}
							material={materials.Material_31}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					<group name="Z" position={[-129.732, -95.45, 21.053]}>
						<mesh
							name="Z001"
							geometry={nodes.Z001.geometry}
							material={materials.Material_41}
							position={[-4.512, 14.828, 9.034]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<mesh
							name="Z002"
							geometry={nodes.Z002.geometry}
							material={materials.Material_4}
							position={[0, 1.161, 0]}
							scale={[1, 0.888, 1]}
						/>
					</group>
					<mesh
						name="Merged_Geometry"
						geometry={nodes.Merged_Geometry.geometry}
						material={materials.Keyboard_Mouse}
						position={[0, -110.443, -0.153]}
						rotation={[-0.094, 0, 0]}
						scale={6.082}
					/>
					<mesh
						name="SpaceBar"
						geometry={nodes.SpaceBar.geometry}
						material={materials.Material_4}
						position={[18.087, -94.288, 59.812]}
						scale={[4.881, 0.888, 1]}
					/>
				</group>
				<Float floatIntensity={0.5} rotationIntensity={0.3}>
					<group
						name="Plant_Plant"
						position={[-64.033, 110, 5]}
						rotation={[0, 0.478, 0]}
						scale={[0.227, 0.23, 0.234]}>
						<group name="stems" position={[-3.258, 269.876, -11.028]}>
							<mesh
								name="stem"
								geometry={nodes.stem.geometry}
								material={materials.Material_44}
								position={[10.005, -121.686, 21.355]}
								rotation={[-1.338, 0.024, 1.671]}
								scale={0.163}
							/>
							<mesh
								name="stemv2"
								geometry={nodes.stemv2.geometry}
								material={materials.Material_44}
								position={[33.836, -126.136, 11.205]}
								rotation={[-Math.PI / 2, 0.155, 2.495]}
								scale={0.113}
							/>
							<mesh
								name="stemv3"
								geometry={nodes.stemv3.geometry}
								material={materials.Material_44}
								position={[-0.645, -122.856, 15.124]}
								rotation={[-1.725, -0.016, -0.58]}
								scale={0.185}
							/>
						</group>
						<group
							name="baban_1"
							position={[-13.499, 199.823, -4.452]}
							rotation={[-3.065, 0.887, 1.874]}
							scale={[217.353, 216.801, 217.938]}>
							<mesh
								name="Plane003"
								geometry={nodes.Plane003.geometry}
								material={materials["Material.024"]}
							/>
							<mesh
								name="Plane003_1"
								geometry={nodes.Plane003_1.geometry}
								material={materials["Material.028"]}
							/>
							<mesh
								name="Plane003_2"
								geometry={nodes.Plane003_2.geometry}
								material={materials["Material.022"]}
							/>
							<mesh
								name="Plane003_3"
								geometry={nodes.Plane003_3.geometry}
								material={materials["Material.021"]}
							/>
						</group>

						<group
							name="banan_3"
							position={[-0.526, 147.79, 11.625]}
							rotation={[0.286, 0.457, -0.887]}
							scale={[435.377, 437.794, 430.988]}>
							<mesh
								name="Plane001"
								geometry={nodes.Plane001.geometry}
								material={materials["Material.024"]}
							/>
							<mesh
								name="Plane001_1"
								geometry={nodes.Plane001_1.geometry}
								material={materials["Material.028"]}
							/>
							<mesh
								name="Plane001_2"
								geometry={nodes.Plane001_2.geometry}
								material={materials["Material.022"]}
							/>
						</group>
						<group
							name="banan_3001"
							position={[32.484, 147.79, 15.332]}
							rotation={[1.949, 0.888, -2.524]}
							scale={[432.457, 433.388, 438.318]}>
							<mesh
								name="Plane007"
								geometry={nodes.Plane007.geometry}
								material={materials["Material.024"]}
							/>
							<mesh
								name="Plane007_1"
								geometry={nodes.Plane007_1.geometry}
								material={materials["Material.028"]}
							/>
							<mesh
								name="Plane007_2"
								geometry={nodes.Plane007_2.geometry}
								material={materials["Material.022"]}
							/>
						</group>
						<group
							name="banan_3002"
							position={[23.109, 147.79, -10.571]}
							rotation={[2.419, 0.398, 2.729]}
							scale={[439.348, 432.205, 432.597]}>
							<mesh
								name="Plane008"
								geometry={nodes.Plane008.geometry}
								material={materials["Material.024"]}
							/>
							<mesh
								name="Plane008_1"
								geometry={nodes.Plane008_1.geometry}
								material={materials["Material.028"]}
							/>
							<mesh
								name="Plane008_2"
								geometry={nodes.Plane008_2.geometry}
								material={materials["Material.022"]}
							/>
						</group>
						<mesh
							name="land"
							geometry={nodes.land.geometry}
							material={materials.Table}
							position={[1.961, 147.79, 12.864]}
							rotation={[-Math.PI / 2, 0, 1.674]}
							scale={1.68}
						/>
						<mesh
							name="Pot"
							geometry={nodes.Pot.geometry}
							material={materials.Pot}
							position={[1.807, 76.2, 11.423]}
							rotation={[0, 1.196, 0]}
							scale={[4.383, 4.351, 4.307]}
						/>
					</group>
				</Float>
				<group name="TV_Old" position={[23.45, 110.148, -27.421]} scale={0.594}>
					<mesh
						name="Cube_59"
						geometry={nodes.Cube_59.geometry}
						material={textureMaterial}
						position={[-0.946, 55.964, -9.517]}
						rotation={[0, 1.571, 0]}
					/>
					<mesh
						name="Cube_60"
						geometry={nodes.Cube_60.geometry}
						material={materials.Monitor}
						position={[-0.919, 55.723, -8.367]}
						rotation={[0, 1.571, 0]}>
						<group
							name="Plane001_3"
							position={[12.454, 71.769, 46.307]}
							rotation={[-2.542, 1.188, 1.697]}
							scale={168.34}>
							<mesh
								name="Plane009"
								geometry={nodes.Plane009.geometry}
								material={materials["Material.020"]}
							/>
							<mesh
								name="Plane009_1"
								geometry={nodes.Plane009_1.geometry}
								material={materials["Material.022"]}
							/>
						</group>
						<group
							name="Plane111"
							position={[5.359, 64.454, -49.157]}
							rotation={[-0.143, 1.002, -0.694]}
							scale={168.34}>
							<mesh
								name="Plane004"
								geometry={nodes.Plane004.geometry}
								material={materials["Material.020"]}
							/>
							<mesh
								name="Plane004_1"
								geometry={nodes.Plane004_1.geometry}
								material={materials["Material.022"]}
							/>
						</group>
					</mesh>
					<mesh
						name="Cube_61"
						geometry={nodes.Cube_61.geometry}
						material={materials.Speaker_Panel}
						position={[47.575, 61.927, 21.862]}
					/>
					<mesh
						name="Cylinder"
						geometry={nodes.Cylinder.geometry}
						material={materials.Metal_Knobs}
						position={[52.681, 81.694, 23.344]}
						rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
						scale={0.862}
					/>
					<mesh
						name="Cylinder_2"
						geometry={nodes.Cylinder_2.geometry}
						material={materials.Metal_Knobs}
						position={[52.681, 66.688, 23.344]}
						rotation={[-Math.PI / 2, -Math.PI / 3, 0]}
						scale={0.862}
					/>
					<mesh
						name="Merged_Geometry001"
						geometry={nodes.Merged_Geometry001.geometry}
						material={materials.Keyboard_Mouse}
						position={[47.394, 45.562, 23.5]}
						rotation={[0, 1.571, 0]}
					/>

					<mesh
						name="Screen"
						geometry={nodes.Screen.geometry}
						position={[-20.986, 62.226, 17.526]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={[168.34, 168.34, 147.105]}>
						<MeshReflectorMaterial
							blur={[300, 30]}
							resolution={2048}
							mixBlur={1}
							mixStrength={180}
							roughness={1}
							depthScale={1.2}
							minDepthThreshold={0.4}
							maxDepthThreshold={1.4}
							color="#202020"
							metalness={0.8}
						/>
					</mesh>
				</group>
				<Float floatIntensity={0.5} rotationIntensity={0.3}>
					<mesh
						name="Mouse"
						geometry={nodes.Mouse.geometry}
						material={materials.Keyboard_Mouse}
						position={[78.921, 110, 23.933]}
						rotation={[Math.PI, -0.078, Math.PI]}
						scale={[0.102, 0.102, 0.157]}
					/>
				</Float>
				<mesh
					name="Table"
					geometry={nodes.Table.geometry}
					material={textureMaterial}
					position={[3.57, 53.199, -5.642]}
					scale={[1.202, 1, 1]}
				/>
			</motion.group>

			<Sparkles position={[0, 0.5, 0]} scale={[5, 5, 5]} size={4} speed={0.4} />
		</group>
	);
};

useGLTF.preload("./model/desk_scene.glb");

export default DeskScene;
