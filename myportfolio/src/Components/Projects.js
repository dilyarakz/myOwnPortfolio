import React, { useState, useEffect } from 'react';
import BackgroundImg from "../images/homebackground3.jpeg";
import Carousel, { CarouselItem } from './Carousel/Carousel';
import ProjectCard from './ProjectCard';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";




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


    return (
        <div className="projectsMainContainer">
            <div className="projectsMainContainerArea">
                <div className="projectItems">

                    {
                        data.projects
                        && data.projects.length > 1
                        && data.projects.map((item) => <ProjectCard key={item.id} project={item} />)
                    }

                </div>


            </div>
        </div>

    );
}



export default Projects;