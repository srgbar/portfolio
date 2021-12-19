import React from "react";
import style from './MyProjects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project"
import socnet from "../common/images/socNet.jpg"
import todo from "../common/images/todo.png"
import counter from "../common/images/counter.png"

function MyProjects() {
    return (
        <div className={style.skillsBlock}>
            <div className={` ${styleContainer.container} ${style.skillsContainer} `}>
                <h1 className={style.title}>My projects_</h1>
                <div className={style.skills}>
                    <Project title={'TodoList'}
                             technology={'React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router, StoryBook, Unit Tests'}
                             linkGithub={''}
                             linkDemo={''}
                             img={todo}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor illo, nostrum numquam provident quo quod totam!\n' +
                             '                    Assumenda, deserunt ducimus eos est ex iste itaque minima, minus nam officia, quibusdam.'}
                    />
                    <Project title={'Social network'}
                             technology={'React, Redux, TypeScript, Redux-Form, Redux-Thunk, React Hooks / Class Components, Axios, Browser-Router'}
                             linkGithub={''}
                             linkDemo={''}
                             img={socnet}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor illo, nostrum numquam provident quo quod totam!\n' +
                             '                    Assumenda, deserunt ducimus eos est ex iste itaque minima, minus nam officia, quibusdam.'}
                    />
                    <Project title={'Counter'}
                             technology={'React, Redux, TypeScript, Local Storage '}
                             linkGithub={''}
                             linkDemo={''}
                             img={counter}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor illo, nostrum numquam provident quo quod totam!\n' +
                             '                    Assumenda, deserunt ducimus eos est ex iste itaque minima, minus nam officia, quibusdam.'}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
