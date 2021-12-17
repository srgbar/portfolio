import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import style from "./Resume.module.css";

function Resume() {
    return <div className={` ${styleContainer.container} ${style.whiteBlock} `}>
        <div className={style.infoDescription}>
            <h1>Resume_</h1>
            <div>
                <h2>Education</h2>
                <h3>Vologda State Technical University</h3>
                <p>2007 - 2012</p>
                <p>Engineer-economist qualification</p>
                <h3>It-incubator(Belarus, Minsk)</h3>
                <p>2021.06 - 2022.03</p>
                <p>React Redux Typescript</p>
            </div>
            <div>
                <h2>Work expereince</h2>
                <h3>Vologda Optical and Mechanical Plant</h3>
                <p>2014 - 2021.07</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus ea nemo nihil non nostrum quas vel!</p>
            </div>
        </div>
    </div>;
}

export default Resume;