import React, { useState, useEffect } from 'react';
import BackgroundImg from "../images/homebackground3.jpeg";
import ProjectCard from './ProjectCard';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";


const propTypes = {};

const defaultProps = {};


const mainStyles = {
    color: "white",
    // height: "100vh",
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "right",
    width: "100%",
    // backgroundSize: "scale-down",
    backgroundSize: "cover",
    // overflow: "hidden",
    // opacity: 0.8
    // backgroundImage: "repeating-linear - gradient(red, yellow 50 %, green 20 %)"
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"

}

const projectsArea = {
    backgroundColor: "rgb(0, 0, 0, 0.4)",
    // backgroundColor: "red",
    height: "70%",
    whidth: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
}
// const arrorButton = {
//     height: "100%",
//     width: "10%",
//     padding: "2em 0.4em",
//     backgroundColor: "rgb(0, 0, 0, 0.1)",
//     // backgroundColor: "red",
//     color: "rgb(255, 255, 255)",
//     border: "none"
// }


const Projects = () => {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch('projectItemsData.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }


    useEffect(() => {
        getData()
    }, [])



    return <div style={mainStyles}>
        <div style={projectsArea}>
            <button  ><a className="arrorButtonLink" href="#"><BsChevronDoubleLeft style={{ fontSize: "3rem", margin: "0" }} /></a></button>
            {
                data.projects && data.projects.length > 1 && data.projects.map((item) => <ProjectCard key={item.id} project={item} />)
            }
            <button ><a href="#"><BsChevronDoubleRight style={{ fontSize: "3rem", margin: "0" }} /></a></button>
        </div>
    </div>;
}

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;
// #endregion

export default Projects;