import { React, Suspense } from "react";
// 3d elements
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// 3d SpaceStation model
import Model from "../../3D-jsx-models/Cophee-Model-Jsx";

export default function Cophee() {
    return (
        < div style={{ width: "100em", height: "40em", position: "absolute", left: "50%", top: "50%", zIndex: 6, transform: "translate(-50%, -40%)" }}>
            <Canvas className="canvas">
                <Suspense>
                    <OrbitControls enableZoom={false} />
                    <pointLight args={["#25A5F7", 4, 0, 0]} position={[0, 5, 0]} />
                    <pointLight args={["#C01F2F", 2, 0, 0]} position={[0, 0, 0]} />
                    <pointLight args={["#FFFFFF", 10, 10, 40]} position={[0, 1.7, 0]} />
                    <pointLight args={["#C01F2F", 3, 5, 0]} position={[-3, -5, 0]} />
                    <meshStandardMaterial attach="material" />

                    <Model scale={1.1} rotation={[Math.PI * 0, Math.PI * 0, 0]} position={[0, 0, 0]} />

                </Suspense>
            </Canvas>
        </div >

    );
}

