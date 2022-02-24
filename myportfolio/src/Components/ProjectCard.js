import React from 'react';
import { Link } from "react-router-dom";


const ProjectCard = (props) => {
    if (!(typeof props.project === "undefined")) {
        return (

            <div className="projectCard">
                <img className="projectCardImg" src={props.project.imgUrl} />
                <div className="projectCardText" >
                    <h3 className="projectCardTitle">{props.project.title}</h3>
                    <div className="projectCardDescrContainer">
                        <p><strong>Description: </strong>{props.project.description}<br /> <strong>Technology: </strong> {props.project.technology}</p>
                    </div>
                </div>
                <div className="projectBtnsContainer">
                    <a className="btn">Live</a>
                    <a className="btn">View Code</a>
                </div>
            </div>

        )
    } else {
        return <div></div>
    }
}



export default ProjectCard;