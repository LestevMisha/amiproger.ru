import React from "react";
// For animations
import { Fade } from "react-reveal/";

export default function FourthSection() {
    return (
        <section className="b-section b-section_fourth borders">
            <div className="b-block b_block_left" style={{ height: "5em" }}>

                <Fade bottom>
                    <button className="b-button b-button_v-1.0 telegram_btn_js" id="telegram">
                        Get My Telegram
                    </button>
                </Fade>

                <div className="divider_hor_1em"></div>

                <Fade bottom>
                    <button className="b-button b-button_v-1.1 b-button_center b-button_anim apply_modal">
                        <svg className="b-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            id="play-circle">
                            <path fill="#ffffff"
                                d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z">
                            </path>
                        </svg>
                        <div className="divider_hor_1em"></div>
                        Contact me
                    </button>
                </Fade>

            </div>
        </section>
    )
}