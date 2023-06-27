import { React } from 'react'
import HoverEach from "../HoverEach"
// For animations
import { Fade, Zoom } from "react-reveal/";

export default function FirstSection() {

    return (
        <div className="common">
            <section className="b-section b-section_first b-section_overflow_hidden borders">
                <div className="divider_10em"></div>
                <div className="container">

                    <div className="b-block">
                        <div className="divider"></div>

                        <div className="b-block b-block_col b-block_col_60% b-block_col_min-w_50em">


                            <div className="b-text b-text_dis-sel b-text_500 b-text_4em b-text_align-left" id="title">
                                <t-white>
                                    {
                                        ["A Journey", "Through the Spectrum", "of My Skills"]
                                            .map((words, wordsIndex) => (
                                                <span key={wordsIndex} id={wordsIndex}>
                                                    {[...words].map((letter, letterIndex) => (
                                                        <HoverEach key={letterIndex} id={letterIndex}>
                                                            {letter === " " ? "\u00A0" : letter}
                                                        </HoverEach>
                                                    ))
                                                    }
                                                </span>
                                            ))}
                                </t-white>
                            </div>

                            <div id="marquee">

                                <Fade>
                                    <div
                                        className="b-text b-text_2em b-text_500 b-text_align-left b-text_uppercase b-text_dis-sel">
                                        · HTML5 ·
                                        JavaScript · JQuery
                                        · TypeScript · CSS3 · Sass · Less · Grid · Bootstrap ·
                                        Flexbox · BEM · PHP8 · Git · SQL · Webflow · WordPress · Swift
                                        · C++ · Python
                                    </div>
                                </Fade>

                                <div
                                    className="b-text b-text_2em b-text_500 b-text_align-left b-text_uppercase b-text_dis-sel">
                                    · HTML5 ·
                                    JavaScript · JQuery
                                    · TypeScript · CSS3 · Sass · Less · Grid · Bootstrap ·
                                    Flexbox · BEM · PHP8 · Git · SQL · Webflow · WordPress · Swift
                                    · C++ · Python
                                </div>
                            </div>

                            <div className="h-text">
                                <div className="b-text b-text_1.6em">
                                    <t-grey>

                                        <Fade top>
                                            <t-point>Since 2019 I have been studying all the basics of programming.<br></br></t-point>
                                        </Fade>

                                        <Fade top>
                                            <t-point>
                                                In 2021 I started
                                                to learn web programming, in 2022 I had started to make the real projects in the
                                                Moscow company <t-emphasize>On-Target</t-emphasize>.<br></br>
                                            </t-point>
                                        </Fade>

                                        <Fade top>
                                            <t-point>
                                                Currently I am working for
                                                freelance and company's
                                                projects.<br></br>
                                            </t-point>
                                        </Fade>

                                    </t-grey>
                                </div>
                            </div>

                            <div className="b-block b_block_left">

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

                        </div>

                        <div className="b-block b-block_initial b-block_col b-block_col_40%">
                            <img className="b-img b-img_me" src={require('../../images/me-2.png')} alt=""></img>
                        </div>

                        <svg className="b-line" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 86">
                            <defs>
                                <linearGradient id="MyGradient" gradientTransform="rotate(0)">
                                    <stop offset="0%" stopColor="#FFFFFF00" />
                                    <stop offset="30%" stopColor="#BF7BFF" />
                                    <stop offset="50%" stopColor="#3A34B5" />
                                    <stop offset="70%" stopColor="#FFFFFF00" />
                                </linearGradient>
                            </defs>
                            <use style={{ display: 'none' }} href="#img1" x="-487" y="-329" />
                            <path className="a" d="m4 64c0 0 148.6 0 174.1 0 25.4 0 31.8-42.1 52.9-43 21.1-0.9 244 0 244 0" />
                        </svg>
                    </div>
                    <div className="divider"></div>
                </div >
            </section >
            <div className="shadow"></div>
        </div >
    )
}
