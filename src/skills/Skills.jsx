import React from "react";
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import SeparateSkill from "./separate skill/SeparateSkill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={` ${styleContainer.container} ${style.skillsContainer} `}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <SeparateSkill title={"HTML&CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"TS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"REDUX"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"GIT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"MATERIAL UI"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"UNIT TEST"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                    <SeparateSkill title={"STORYBOOK"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatum?"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
