import React from 'react';
import BackgroundImg from "../images/homebackground3.jpeg";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

const mainStyles = {
    color: "white",
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "right",
    width: "80%",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const skillsSection = {
    backgroundColor: "#090979",
}

const Skills = () => {
    return <div style={mainStyles}>

        <div style={skillsSection}>

            <div className="logosSection">
                <img className="logos" src="react.png" />
                <div className="skillLogText">
                    <h2>React</h2>
                    <p></p>
                </div>
            </div>



        </div>



    </div>;
}

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;
// #endregion

export default Skills;