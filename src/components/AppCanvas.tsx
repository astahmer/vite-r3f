import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { CameraControls } from "./CameraControls";

export const AppCanvas = () => {
    return (
        <Canvas shadows orthographic gl={{ antialias: true }} camera={{ position: [0, 0, 25], zoom: 50 }} id="canvas">
            <axesHelper />
            <Suspense fallback={null}>{/* <Spritesheet /> */}</Suspense>
            <CameraControls />
        </Canvas>
    );
};
