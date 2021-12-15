import React from "react";
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css";
import photo from "../images/photo.jpg"
import ReactTypingEffect from "react-typing-effect";
import {FaGithub, FaLinkedin, FaTelegram, FaVk} from 'react-icons/fa';
import iconDownload from "../images/img_download_icon.png"

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
            <div className={s.whiteBlock}>
                <div className={s.infoDescription}>
                    <h1>Hi_</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur
                        distinctio dolorem dolores eaque exercitationem id minus quisquam quod.
                        Autem blanditiis commodi delectus doloribus eum exercitationem iusto magni nemo,
                        nesciunt nihil nobis, nostrum perferendis quis quo sapiente vel vero.
                    </p>
                    <a href="" className={s.downloadButton}>
                        <img src={iconDownload} style={{width: 20}}/> Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;
