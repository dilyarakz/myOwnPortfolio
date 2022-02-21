import React from 'react';
import BackgroundImg from "../images/homebackground3.jpeg";


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
}

const welcomeText = {
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    width: "60%",
    position: "absolute",
    top: "35%",
    right: "15%",
    // color: "#02FFFF",
    // color: "white",
    // color: "#FF00FF",
    color: "#FFFF00",
    // color: "black",
    fontWeight: "bold",
    padding: "2em",
    textAlign: "center"
}

const multiColorText = {
    // color: "#00FF00",
    // color: "#FF00FF",
    color: "#FFFF00",
    textDecoration: "underline"
}

const Home = () => {
    return <div style={mainStyle}>

        <div style={welcomeText}>
            <h1>Hello, my name is <strong style={multiColorText}>Dilyara Tulegenova</strong></h1>
            <h1>I am junior Software Developer</h1>
        </div>


    </div>;
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;