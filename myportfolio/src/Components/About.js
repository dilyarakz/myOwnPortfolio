import React from 'react';
import BackgroundImg from "../images/homebackground3.jpeg";



const propTypes = {};

const defaultProps = {};

const mainStyle = {
    // backgroundColor: "#2596be",
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
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    width: "70%",
    maxWidth: "1000px",
    minWidth: "800px",
    maxHeight: "600px",
    height: "auto",
    // color: "black",
    // color: "#02FFFF",
    // color: "white",
    // color: "#FF00FF",
    color: "#FFFF00",
    fontWeight: "bold",
    padding: "0.5em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"


}

const aboutImg = {
    width: "50%",
    height: "auto",
    objectFit: "scale-down",
    margin: "2em 2em",
    // border: "2px solid green"
}

const aboutMeTitle = {
    borderBottom: "2px solid #FFFF00",
    paddingBottom: "0.2em",
    paddingRight: "1em",
    paddingLeft: "1em",
    marginBottom: "0",
    marginTop: "1rem"
}


const About = () => {
    return <div style={mainStyle}>

        <div style={styleAboutContainer}>
            <h1 style={aboutMeTitle}>About Me</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "top-center",

            }}>
                <img style={aboutImg} src="aboutSelfImg1.jpeg" />
                <div style={{ margin: "2em", width: "45%", padding: "1em" }}>

                    <p style={{ fontSize: "1.2em", lineHeight: "1.7em", overflow: "hidden", wordSpacing: "0.5em", wrap: "wrap" }}>
                        I am junior software developer based in Canada.
                        I enjoy coding and solve problems.  Love traveling, skiing, skating and hiking.
                        I interested in backend and front end. </p>
                </div>
            </div>
        </div>
    </div >;
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;
// #endregion

export default About;