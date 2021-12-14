import React from "react";
import style from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css";
import photo from "../images/photoSV.jpg"
import ReactTypingEffect from "react-typing-effect";

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.description}>
                    <span>Hi There!</span>
                    <h1>I am <span className={style.surname}>Barbolin Sergey</span></h1>
                    <ReactTypingEffect text={['Front-end developer who loves React and Information Technology']}
                                       eraseSpeed={0} typingDelay={1000} speed={50}
                                       className={style.aboutMeFooterText}/>
                </div>
                <div className={style.photo}>
                    <img src={photo}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
