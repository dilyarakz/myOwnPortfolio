import React from 'react';
import BackgroundImg from "../images/homebackground3.jpeg";





const About = () => {
    return (
        <div className="aboutMainContainer">
            <div className="aboutMainContainerModule">
                <h1 className="aboutMainContainerModuleTitle">About Me</h1>
                <div className="aboutMainContainerModule">
                    <img className="aboutMainContainerModuleImg" src="aboutSelfImg1.jpeg" />
                    <div className="aboutMainContainerModuleText">
                        <p className="aboutMainContainerModuleTextPargr">
                            I am junior software developer based in Canada.
                            I enjoy coding and solve problems.  Love traveling, skiing, skating and hiking.
                        I interested in backend and front end development. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About;