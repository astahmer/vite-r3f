import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { CameraControls } from "./CameraControls";

export const AppCanvas = () => {
    return (
        <Canvas orthographic gl={{ antialias: false }} camera={{ position: [0, 20, 0], up: [0, -1, 0], zoom: 50 }}>
            <axesHelper />
            <Suspense fallback={null}>{/* <Spritesheet /> */}</Suspense>
            <CameraControls />
        </Canvas>
    );
};
