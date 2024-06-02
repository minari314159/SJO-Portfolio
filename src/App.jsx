import {
	ScrollControls,
	Scroll,
	Environment,
	OrbitControls,
	Preload,
} from "@react-three/drei";
import DeskScene from "./DeskScene";

import Interface from "./Interface";
import { Canvas } from "@react-three/fiber";
import ScrollManager from "./ScrollManager";
import Menu from "./Menu";
import LoadingScreen from "./LoadingScreen";
import { useState, useEffect, Suspense } from "react";

export default function App() {
	const [section, changeSection] = useState(0);
	const [open, setOpened] = useState(false);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		setOpened(false);
	}, [section]);
	return (
		<>
			<LoadingScreen started={started} setStarted={setStarted} />
			<Menu changeSection={changeSection} section={section} open={open} />
			<Canvas
				shadows
				dpr={[1, 2]}
				orthographic
				camera={{
					position: [0, 0, 3],
					left: -2,
					right: 2,
					top: 2,
					bottom: 2,
					zoom: 100,
				}}>
				<OrbitControls
					makeDefault
					minPolarAngle={Math.PI / 3}
					maxPolarAngle={Math.PI / 3}
					enableZoom={false}
					enablePan={false}
				/>

				{/* Scene */}
				<Environment preset="night" />
				<color args={["#252728"]} attach="background" />

				{/* Scroll Controls */}
				<ScrollControls pages={3} distance={1} damping={0.01}>
					<ScrollManager section={section} changeSection={changeSection} />
					<Suspense>
						{started && (
							<DeskScene section={section} open={open} setOpened={setOpened} />
						)}
					</Suspense>
					<Scroll position={[0, 0]} html>
						{started && <Interface section={section} open={open} />}
					</Scroll>
				</ScrollControls>
				<Preload all />
			</Canvas>
		</>
	);
}
