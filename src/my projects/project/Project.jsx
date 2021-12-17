import React from "react";

function Project(props) {
    return <div>
        <div>
            <div>
                <div>
                    <img src={props.img}
                         alt={props.title}/>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    </div>
}

export default Project;
