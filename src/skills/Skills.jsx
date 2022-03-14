import React from "react";
import s from './Skills.module.css';
import st from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import html from "../common/images/htmlLogo.svg"
import css from "../common/images/cssLogo.svg"
import react from "../common/images/reactLogo.svg"
import redux from "../common/images/reduxLogo.svg"
import js from "../common/images/jsLogo.svg"
import ts from "../common/images/tsLogo.svg"
import mui from "../common/images/muiLogo.svg"
import git from "../common/images/gitLogo.svg"
import unit from "../common/images/unitLogo.svg"
import storybook from "../common/images/storybookLogo.svg"
import axios from "../common/images/axiosLogo.png"

function Skills() {
    return (
        <div className={` ${st.container} ${s.skillsContainer} `}>
            <h1 className={st.title}>My skills_</h1>
            <div className={s.skills}>
                <Skill title={"HTML"} skillLogo={html}/>
                <Skill title={"CSS"} skillLogo={css}/>
                <Skill title={"JS"} skillLogo={js}/>
                <Skill title={"TS"} skillLogo={ts}/>
                <Skill title={"REACT"} skillLogo={react}/>
                <Skill title={"REDUX"} skillLogo={redux}/>
                <Skill title={"GIT"} skillLogo={git}/>
                <Skill title={"MATERIAL UI"} skillLogo={mui}/>
                <Skill title={"UNIT TEST"} skillLogo={unit}/>
                <Skill title={"STORYBOOK"} skillLogo={storybook}/>
                <Skill title={"AXIOS"} skillLogo={axios}/>
            </div>
        </div>
    );
}

export default Skills;
