import React from "react";
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css";
import photo from "../common/images/photo.jpg"
import ReactTypingEffect from "react-typing-effect";
import {FaGithub, FaLinkedin, FaTelegramPlane} from 'react-icons/fa';

function Main() {
    return (
        <div>
            <div className={s.mainBlock}>
                <div className={styleContainer.container}>
                    <div className={s.photo}>
                        <img src={photo}/>
                    </div>
                    <div className={s.description}>
                        <h1>Hi There!</h1>
                        <h2>I am <span className={s.surname}>Barbolin Sergey_</span></h2>
                        <ReactTypingEffect text={['Front-end developer who loves React and JS']}
                                           eraseSpeed={0} typingDelay={1000} speed={50}
                                           className={s.aboutMeFooterText}/>
                        <dl className={s.personalInfo}>
                            <p>AGE: <span>31</span></p>
                            <p>Phone: <span>+7 (921) 555-09-03</span></p>
                            <p>Email: <span>frontend@gmail.com</span></p>
                            <p>Address: <span>Vologda Russia</span></p>
                        </dl>
                        <p className={s.linksMedia}>
                            <a href="" target="_blank"><i><FaGithub color={"white"}/></i></a>
                            <a href="" target="_blank"><i><FaLinkedin color={"white"}/></i></a>
                            <a href="" target="_blank"><i><FaTelegramPlane color={"white"}/></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
