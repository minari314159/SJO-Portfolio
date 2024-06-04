import { ScrollControls, Scroll, Preload } from "@react-three/drei";
import DeskScene from "./DeskScene";

import Interface from "./Interface";
import { Canvas } from "@react-three/fiber";
import ScrollManager from "./ScrollManager";
import Menu from "./Menu";
import LoadingScreen from "./LoadingScreen";
import { useState, Suspense } from "react";

export default function App() {
	const [section, changeSection] = useState(0);
	const [open, setOpen] = useState(false);
	const [started, setStarted] = useState(false);

	return (
		<>
			<LoadingScreen started={started} setStarted={setStarted} />
			<Menu changeSection={changeSection} section={section} open={open} />
			<Canvas
				shadows
				dpr={[1, 2]}
				camera={{
					position: [0, 2, 4],

					fov: 25,
					near: 1,
					far: 20,
				}}>
				{/* Scene */}
				<hemisphereLight intensity={0.3} groundColor="black" />

				<color args={["#000000"]} attach="background" />

				{/* Scroll Controls */}
				<ScrollControls pages={3} distance={1} damping={0.01}>
					<ScrollManager section={section} changeSection={changeSection} />

					<Suspense>
						{started && <DeskScene section={section} setOpen={setOpen} />}
					</Suspense>

					<Scroll position={[0, 0]} html>
						{started && (
							<Interface section={section} open={open} setOpen={setOpen} />
						)}
					</Scroll>
				</ScrollControls>

				<Preload all />
			</Canvas>
		</>
	);
}
