import React from "react";
import s from './Project.module.css';

function Project(props) {
    return (
        <div className={s.block}>
            <div className={s.divImg}>
                <div style={props.img} className={s.projectLogo}>
                    <div>
                        <a href={props.linkDemo} target={'blank'} className={s.a}>View</a>
                        <a href={props.linkGithub} target={'blank'} className={s.a}>Code</a>
                    </div>
                </div>
            </div>
            <div>
                <p className={s.title}>{props.title}</p>
                <p>{props.technology}</p>
            </div>
        </div>)
}

export default Project