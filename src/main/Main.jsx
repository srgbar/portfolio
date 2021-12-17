import React from "react";
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css";
import photo from "../common/images/photo.jpg"
import ReactTypingEffect from "react-typing-effect";
import {FaGithub, FaLinkedin, FaTelegram, FaVk} from 'react-icons/fa';

function Main() {
    return (
        <div>
            <div className={s.mainBlock}>
                <div className={styleContainer.container}>
                    <div className={s.photo}>
                        <img src={photo}/>
                    </div>
                    <div className={s.description}>
                        <h1>Hi There! I am <span className={s.surname}>Barbolin Sergey_</span></h1>
                        <ReactTypingEffect text={['Front-end developer who loves React and JS']}
                                           eraseSpeed={0} typingDelay={1000} speed={50}
                                           className={s.aboutMeFooterText}/>
                        <p className={s.personalInfo}>
                            <p>Age: <span>31</span></p>
                            <p>Phone: <span>+7 (921) 555-09-03</span></p>
                            <p>Email: <span>frontend@gmail.com</span></p>
                            <p>Address: <span>Vologda Russia</span></p>
                        </p>
                        <p className={s.linksMedia}>
                            <a href="" target="_blank"><i><FaGithub/></i></a>
                            <a href="" target="_blank"><i><FaLinkedin/></i></a>
                            <a href="" target="_blank"><i><FaVk/></i></a>
                            <a href="" target="_blank"><i><FaTelegram/></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
