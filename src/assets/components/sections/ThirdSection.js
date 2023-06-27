
import React from "react";
// 3d elements
import Car from "../3D-scenes/Car"
import Cophee from "../3D-scenes/Cophee"
// For animations
import { Fade } from "react-reveal/";

export default function TrirdSection() {
    return (
        <section className="b-section borders borders_dark">
            <Fade top>
                <>
                    <div className="h-text">
                        <div className="b-h2 b-h2_black">AI-based Concept Car</div>
                    </div>
                </>
            </Fade>
            <Fade top>
                <>
                    <div className="h-text">
                        <div className="b-h2 b-h2__desc">AI-based Concept Car</div>
                    </div>
                </>
            </Fade>


            <Fade>
                <div>
                    <Car />
                </div>
            </Fade>


            <div className="easy-grid" style={{ '--m': '20rem', '--g': '1.5rem' }}>
                <div className="b-grid-block b-grid-block_tag-main">
                    <Cophee />
                </div>

                <div className="b-grid-block b-grid-block_tag-sub-main">
                    <div className="b-col">
                        <div className="h-text_-2x">
                            <div className="b-text b-text_600 b-text_light-purple b-text_text-align_center">
                                <t-pointer>✅</t-pointer>1. How was this website created?
                            </div>
                        </div>

                        <div className="b-text b-text_300 b-text_purple" style={{ width: '70%' }}>
                            This portfolio-website was made using Visual Studio Code ッ, based on React, uses version control with Git, has different React libraries.
                        </div>
                    </div>
                </div>
                <div className="b-grid-block b-grid-block_tag-sub-main_2">
                    <div className="b-col">
                        <div className="h-text_-2x">
                            <div className="b-text b-text_600 b-text_light-purple b-text_text-align_center">
                                <t-pointer>✅</t-pointer>2. What did you use for 3D?
                            </div>
                        </div>

                        <div className="h-text_-2x">
                            <div className="b-text b-text_300 b-text_purple" style={{ width: '70%' }}>
                                I've used three.js library. Used libraries:
                            </div>
                        </div>
                    </div>
                    <div className="b-col">

                        <div className="b-code">
                            1. npm i three
                        </div>

                        <div className="b-code">
                            2. npm i @react-three/fiber
                        </div>

                        <div className="b-code">
                            3. npm i @react-three/drei
                        </div>
                    </div>
                </div>

                <div className="b-grid-block b-grid-block_first">
                    <div className="b-col">
                        <div className="h-text_-2x">
                            <div className="b-text b-text_600 b-text_light-purple b-text_text-align_center">
                                <t-pointer>✅</t-pointer>3. What library did you use for scroll 3D animation?
                            </div>
                        </div>

                        <div className="b-text b-text_300 b-text_purple" style={{ width: '70%' }}>
                            Gsap + React.
                        </div>
                    </div>
                </div>

                <div className="b-grid-block b-grid-block_second">
                    <div className="b-col">
                        <div className="h-text_-2x">
                            <div className="b-text b-text_600 b-text_light-purple b-text_text-align_center">
                                <t-pointer>✅</t-pointer>4. How long have you been programming?
                            </div>
                        </div>

                        <div className="b-text b-text_300 b-text_purple" style={{ width: '70%' }}>
                            3+ years.
                        </div>
                    </div>
                </div>

                <div className="b-grid-block b-grid-block_third">
                    <div className="b-col">
                        <div className="h-text_-2x">
                            <div className="b-text b-text_600 b-text_light-purple b-text_text-align_center">
                                <t-pointer_red>❌</t-pointer_red>5. Did you make this 3D models by your own?
                            </div>
                        </div>

                        <div className="b-text b-text_300 b-text_purple" style={{ width: '70%' }}>
                            No, I didn't.
                        </div>
                    </div>
                </div>
                <div className="b-grid-block b-grid-block_fourth">
                    <div className="b-col">
                        <div className="h-text_-2x">
                            <div className="b-text b-text_600 b-text_light-purple b-text_text-align_center">
                                <t-pointer_green>✅</t-pointer_green>6. Whr's animations from!?
                            </div>
                        </div>

                        <div className="b-code b-code_green">
                            1. npm i framer-motion
                        </div>

                        <div className="b-code b-code_green">
                            2. npm i react-reveal
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}