import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */

const navMainCont = {
    backgroundColor: "black",
    padding: "1rem 3rem",
    paddingRight: "2rem",
    color: "#979494",
    display: "flex",
    justifyContent: "space-between"
}

const navList = {
    display: "flex"

}

const navListItem = {
    marginRight: "0.9em",
    marginTop: "1em",
    padding: "0.2rem",
    textAlign: 'center',
    fontWeight: "bold",
    // border: "1px white solid"

}



const navIcon = {
    marginRight: "0.5em",
    padding: "1rem",
    // border: "1px white solid",
    color: "#02FFFF",
    fontStyle: "italic",
    fontWeight: "900"
}


const NavBar = () => {
    return <nav style={navMainCont}>
        <div>
            <h2 style={navIcon}>DT</h2>
        </div>
        <div style={navList}>
            <a href="#"><h4 style={navListItem}>Home</h4></a>
            <a href="#"><h4 style={navListItem}>About</h4></a>
            <a href="#"><h4 style={navListItem}>Projects</h4></a>
            <a href="#"><h4 style={navListItem}>Contacts</h4></a>
            <a href="#"><h4 style={navListItem}>Resume</h4></a>
        </div>


    </nav>;
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion

export default NavBar;