import React from "react";
import s from "./Main.module.css";
import st from "../common/styles/Container.module.css";
import photo from "../common/images/photo2.jpg"
import ReactTypingEffect from "react-typing-effect";
import Nav from "../nav/Nav";

function Main() {
    return (
        <div>
            <div className={s.mainBlock}>
                <div className={s.header}>
                    <Nav/>
                </div>
                <div className={st.container}>
                    <div>
                        <img src={photo}/>
                    </div>
                    <div className={s.description}>
                        <h1>Hi There!</h1>
                        <h2>I am <span className={s.surname}>Barbolin Sergey_</span></h2>
                        <ReactTypingEffect text={['Front-end developer who loves React and JS']}
                                           eraseSpeed={0} typingDelay={1000} speed={50}
                                           className={s.aboutMeFooterText}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
