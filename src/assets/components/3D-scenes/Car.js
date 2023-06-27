import { React, Suspense } from "react";
// 3d elements
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// 3d SpaceStation model
import Model from "../../3D-jsx-models/Car-Model-Jsx";

export default function Car() {
    return (
        < div style={{ width: "100%", height: "40em", boxSizing: "initial" }}>
            <Canvas className="canvas">
                <Suspense>
                    <OrbitControls enableZoom={false} />
                    <pointLight args={["#25A5F7", 4, 0, 0]} position={[0, 5, 0]} />
                    {/* <pointLight args={["#C01F2F", 2, 0, 0]} position={[0, 0, 0]} /> */}
                    {/* <pointLight args={["#3BFC7B", 1, 0, 0.5]} position={[25, 25, 0]} /> */}
                    <pointLight args={["#FFFFFF", 10, 10, 40]} position={[0, 1.7, 0]} />
                    <pointLight args={["#C01F2F", 3, 5, 0]} position={[-3, -5, 0]} />
                    <meshStandardMaterial attach="material" />

                    <Model scale={1.7} rotation={[Math.PI * 0.15, Math.PI * 1.8, 0]} position={[0, 1, 0]} />

                </Suspense>

            </Canvas>
        </div >

    );
}

