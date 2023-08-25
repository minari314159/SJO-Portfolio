import {
  ScrollControls,
  Scroll,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import DeskScene from "./DeskScene";

import Interface from "./Interface";
import { Canvas } from "@react-three/fiber";
import ScrollManager from "./ScrollManager";
import Menu from "./Menu";
import LoadingScreen from "./LoadingScreen";
import { useState, useRef, Suspense } from "react";

export default function App() {
  const [section, changeSection] = useState(0);

  const [started, setStarted] = useState(false);

  const dirLight = useRef();

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Menu changeSection={changeSection} />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [2, 1, 2],
        }}
      >
        {/* <OrbitControls makeDefault /> */}

        {/* Scene */}
        <Environment preset="night" />
        <color args={["#000000"]} attach="background" />
        <directionalLight
          ref={dirLight}
          castShadow
          position={[1.5, 2, 0]}
          intensity={1}
        />

        <ScrollControls pages={3} distance={1} damping={0.5}>
          <ScrollManager section={section} changeSection={changeSection} />
          <Suspense>{started && <DeskScene section={section} />}</Suspense>
          <Scroll position={[0, 0]} html>
            {started && <Interface section={section} />}
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
