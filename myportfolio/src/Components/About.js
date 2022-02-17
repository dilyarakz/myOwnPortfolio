import React from 'react';
import BackgroundImg from "../images/about3.jpeg";


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

const mainStyle = {
    // backgroundColor: "black",
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
    justifyContent: "center",
    alignItems: "center"
}

const styleAboutContainer = {
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    width: "70%",
    maxWidth: "1000px",
    height: "60%",
    // color: "black",
    // color: "#02FFFF",
    // color: "white",
    // color: "#FF00FF",
    color: "#FFFF00",
    fontWeight: "bold",
    padding: "0.5em",
    display: "flex",
    justifyContent: "space-between"

}

const aboutImg = {
    width: "50%",
    height: "auto",
    objectFit: "scale-down",
    margin: "2em 2em"
}


const About = () => {
    return <div style={mainStyle}>

        <div style={styleAboutContainer}>
            <img style={aboutImg} src="aboutSelfImg1.jpeg" />
            <div style={{ marginLeft: "0px", marginRight: "4em", marginTop: "2em", marginBotton: "2em", width: "50%", overflow: "hidden" }}>

                <p style={{ fontSize: "1em" }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
                Iorem Ipsum passages, and more recently with desktop publishing software like
Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>


    </div>;
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;
// #endregion

export default About;