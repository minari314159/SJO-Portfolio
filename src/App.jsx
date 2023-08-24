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
import { useState, useRef } from "react";

export default function App() {
  const [section, changeSection] = useState(0);

  const dirLight = useRef();

  return (
    <>
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
        {/* Helpers */}
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
          <DeskScene section={section} />
          <Scroll position={[0, 0]} html>
            <Interface section={section} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
