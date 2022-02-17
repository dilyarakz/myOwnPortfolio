import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/**
 * 
 */
const footerMain = {
    backgroundColor: "black",
    padding: "3em",
    color: "#02FFFF",
    // position: "absolute",
    width: "100%",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    fontFamily: "sans-serif",
    fontStyle: "normal"
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
    return <footer style={footerMain}>
        {

            // <a><i style={linkInStyle}>git</i></a>
            // <a><i className="material-icons" style={{ fontSize: '36px' }}>share</i></a>
            // <a><i style={linkInStyle}>in</i></a>
        }

        Footer

    </footer>;
}


// #endregion

export default Footer;