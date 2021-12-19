import React from "react";
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.block}>
            <div className={style.divImg}>
                <img src={props.img} alt={props.title} className={style.projectLogo}/>
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.technology}</p>
                {/*<p>{props.description}</p>*/}
            </div>
        </div>)
}

export default Project;
