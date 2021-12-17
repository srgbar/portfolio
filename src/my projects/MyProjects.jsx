import React from "react";
import style from './MyProjects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project"

function MyProjects() {
    return (
        <div className={style.skillsBlock}>
            <div className={` ${styleContainer.container} ${style.skillsContainer} `}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.skills}>
                    <Project title={'TodoList'}
                             technology={'React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router, StoryBook, Unit Tests'}
                             linkGithub={''}
                             linkDemo={''}
                             img={''}
                    />
                    <Project title={'Social network'}
                             technology={'React, Redux, TypeScript, Redux-Form, Redux-Thunk, React Hooks / Class Components, Axios, Browser-Router'}
                             linkGithub={''}
                             linkDemo={''}
                             img={''}
                    />
                    <Project title={'Counter'}
                             technology={'React, Redux, TypeScript, Local Storage '}
                             linkGithub={''}
                             linkDemo={''}
                             img={''}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
