import React from 'react';
import { Link } from "react-router-dom";

const propTypes = {};

const defaultProps = {};

const cardMain = {
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    // backgroundColor: "red",
    width: "500px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "",
    paddingTop: "0",

}

const cardImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: "0",
    padding: "0"
}

const cardTextContainer = {
    padding: "0.7em 2em",
    color: "white"
}

const cardTitle = {
    fontWeight: "bold",
    textDecoration: "underline"
}

const ProjectCard = (props) => {
    if (!(typeof props.project === "undefined")) {
        return <Link id="projectLink" to="/">
            <div style={cardMain}>
                <img id="projectImg" style={cardImg} src={props.project.imgUrl} />
                <div id="projectTextContainer" style={cardTextContainer}>
                    <h3 style={cardTitle}>{props.project.title}</h3>
                    <div>
                        <p><strong>Description: </strong>{props.project.description}<br /> <strong>Technology: </strong> {props.project.technology}</p>
                    </div>
                </div>
            </div>
        </Link>;
    } else {
        return <div></div>
    }
}

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;


export default ProjectCard;