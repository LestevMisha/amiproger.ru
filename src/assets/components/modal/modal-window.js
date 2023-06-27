import { React, useRef } from "react";
// for emailing EmailJs
import emailjs from "emailjs-com";

export default function Modal() {


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();


        const modal = document.getElementById("modal-container");
        const success_ = document.getElementById("success");
        const error_ = document.getElementById("error");

        emailjs.sendForm("service_67n2o9p", "template_868ob65", form.current, "a_v1VMieo2rMhOsLC")
            .then((result) => {
                console.log(result.text);
                // interaction
                success_.classList.remove("alert_out");
                setTimeout(() => {
                    modal.classList.add("out");
                    setTimeout(() => {
                        success_.classList.add("alert_out");
                    }, 501)
                }, 3000)

            }, (error) => {
                console.log(error.text);

                // interaction
                error_.classList.remove("alert_out");
                setTimeout(() => {
                    modal.classList.add("out");
                    setTimeout(() => {
                        error_.classList.add("alert_out");
                    }, 501)
                }, 3000)
            });
        e.target.reset();

    }




    return (
        <div id="modal-container">
            <div className="modal-background">
                <div className="modal">

                    <div className="b-block b-block_col b-block_col_60%">
                        <h2>How to reach Me Out!?</h2>
                        <p>I will touch you as soon as possible.</p>
                        <form ref={form} onSubmit={sendEmail}>

                            <input className="b-input" required placeholder="Name" type="text" name="name" />
                            <input className="b-input" required placeholder="Telegram Contact" type="text" name="telegram" />
                            <input className="b-input" required placeholder="📩 Email" type="email" name="email" />
                            <input hidden defaultValue="Reach Me Out!" name="subject" />

                            <button className="b-button b-button_v-1.3" type="submit" id="send-email-js">
                                Get My Telegram
                            </button>
                        </form>
                    </div>
                    <img className="b-back-hand-form" src="./images/hand.png" alt="Yellow hand with a blue sleeve" />
                    <div className="alert alert_out" id="success"><t-black>Congrats 🎉</t-black> <t-emphasize>successfully delivered!</t-emphasize></div>
                    <div className="alert alert_out" id="error"><t-purple>Something went wrong 😞</t-purple></div>
                </div>
            </div>
        </div>
    )
}