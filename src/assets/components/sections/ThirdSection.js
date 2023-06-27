
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
                                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check-square"><path fill="#4c45d6" d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path></svg>
                                1. How was this website created?
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
                                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check-square"><path fill="#4c45d6" d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path></svg>
                                2. What did you use for 3D?
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
                                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check-square"><path fill="#4c45d6" d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path></svg>
                                3. What library did you use for scroll 3D animation?
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
                                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check-square"><path fill="#4c45d6" d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path></svg>
                                4. How long have you been programming?
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
                            <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times"><path fill="#ee3769" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>5. Did you make this 3D models by your own?
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
                                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check-square"><path fill="#4c45d6" d="M10.21,14.75a1,1,0,0,0,1.42,0l4.08-4.08a1,1,0,0,0-1.42-1.42l-3.37,3.38L9.71,11.41a1,1,0,0,0-1.42,1.42ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path></svg>
                                6. Whr's animations from!?
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

            <div className="divider_10em"></div>
            <div className="line line_dark"></div>
            <div className="divider_2em"></div>
            <div className="line line_dark"></div>
            <div className="divider_2em"></div>
            <div className="line line_dark"></div>
            <div className="divider_2em"></div>
            <div className="line line_dark"></div>
            <div className="divider_2em"></div>
            <div className="line line_dark"></div>
            <div className="divider_2em"></div>
            <div className="line line_dark"></div>
            <div className="divider_2em"></div>
            <div className="line line_dark"></div>
            <div className="divider"></div>
            <div className="b-code b-code_green" style={{ width: "fit-content", margin: "0 auto", padding: "0.5em 2em" }}>
                HeyHelp Inc.
            </div>
            <div className="divider_5em"></div>

        </section>
    )
}