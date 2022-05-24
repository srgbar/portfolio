import React from "react";
import s from './MyProjects.module.css';
import st from "../common/styles/Container.module.css";
import Project from "./project/Project"
import socnet from "../common/images/socNet.jpg"
import todo from "../common/images/todo.jpg"
import counter from "../common/images/counter.jpg"
import kino from "../common/images/kino.jpg"
import {v1} from "uuid";

const projectsSPA = [
    {
        id: v1(),
        title: "Todolist",
        linkGithub: "https://github.com/srgbar/todolist-2022",
        linkDemo: "https://srgbar.github.io/todolist-2022/#/login",
        img: {backgroundImage: `url(${todo})`},
        technology: "React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router, StoryBook, Unit Tests"
    }, {
        id: v1(),
        title: "Social network",
        linkGithub: "https://github.com/srgbar/social-net",
        linkDemo: "https://srgbar.github.io/social-net/#/social-net/profile",
        img: {backgroundImage: `url(${socnet})`},
        technology: "React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks / Class Components, Axios, Browser-Router"
    }, {
        id: v1(),
        title: "Counter",
        linkGithub: "https://github.com/srgbar/counter",
        linkDemo: "https://srgbar.github.io/counter/#/counterV1",
        img: {backgroundImage: `url(${counter})`},
        technology: "React, Redux, TypeScript, Local Storage"
    }, {
        id: v1(),
        title: "Friday project",
        linkGithub: "",
        linkDemo: "",
        img: {backgroundImage: `url(${""})`},
        technology: "React, Redux, TypeScript"
    }, {
        id: v1(),
        title: "Kino poisk",
        linkGithub: "https://github.com/srgbar/kinopoisk",
        linkDemo: "https://srgbar.github.io/kinopoisk/",
        img: {backgroundImage: `url(${kino})`},
        technology: "React, Redux, TypeScript"
    },
]


function MyProjects() {
    return (
        <div className={s.fon}>
            <div className={` ${st.container} ${s.projectsContainer} `}>
                <h1 className={st.title}>My projects_</h1>
                <div className={s.projects}>
                    {
                        projectsSPA.map(el => <Project key={el.id}
                                                       img={el.img}
                                                       title={el.title}
                                                       linkDemo={el.linkDemo}
                                                       linkGithub={el.linkGithub}
                                                       technology={el.technology}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
