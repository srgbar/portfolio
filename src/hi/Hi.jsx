import iconDownload from "../common/images/img_download_icon.png";
import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import style from "./Hi.module.css";

function Hi() {
    return <div className={` ${styleContainer.container} ${style.whiteBlock} `}>
        <div className={style.infoDescription}>
            <h1>Hi_</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur
                distinctio dolorem dolores eaque exercitationem id minus quisquam quod.
                Autem blanditiis commodi delectus doloribus eum exercitationem iusto magni nemo,
                nesciunt nihil nobis, nostrum perferendis quis quo sapiente vel vero.
            </p>
            <a href="" className={style.downloadButton}>
                <img src={iconDownload} style={{width: 20}}/> Download CV
            </a>
        </div>
    </div>;
}

export default Hi;