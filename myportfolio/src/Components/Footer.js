import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoMarkGithub, AiOutlineLinkedin } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

/**
 * 
 */
const footerMain = {
    backgroundColor: "black",
    padding: "3em",
    color: "#02FFFF",
    position: "relative",
    width: "100%",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    // marginTop: "auto"
}

const linkInStyle = {
    fontFamily: "sans-serif",
    fontStyle: "normal",
    border: "1px solid #02FFFF",
    fontWeight: "900",
    padding: "1px 7px",
    fontSize: "30px",
    marginRight: "1em"
}

const Footer = () => {
    return (
        <footer className="footerMainContainer">
            <h3>dilyara.gumarova@gmail.com</h3>
            <div className="linksToOtherProf">
                <a href="#" className="footerLinks"><GoMarkGithub className="githubLogo" /></a>
                <a href="#" className="footerLinks"><FaLinkedin /></a>
            </div>

        </footer>
    )
}


// #endregion

export default Footer;