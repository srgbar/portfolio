import iconDownload from "../common/images/img_download_icon.png";
import React from "react";
import st from "../common/styles/Container.module.css";
import s from "./Welcome.module.css";

function Welcome() {
    return (
        <div className={` ${st.container} ${s.hiBlock} `}>
            <h1 className={st.title}>Welcome_</h1>
            <div className={s.infoDescription}>
                <p>
                    I am Junior Web developer able to build a Web presence from the ground up. Skilled at writing
                    well-designed, testable and efficient code using current best practices in Web development. Fast
                    learner, hard worker and team player who is proficient in an array of scripting languages and
                    multimedia
                    Web tools.
                </p>
                <a href="" className={s.downloadButton}>
                    <img src={iconDownload} style={{width: 20, marginRight: 10}}/>Download CV
                </a>
            </div>
        </div>
    )
}

export default Welcome;