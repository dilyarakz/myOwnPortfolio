import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



const NavBar = () => {
    return (
        <nav className="navBarMainContainer">
            <div className="navBarLogoContainer">
                <h2 className="navBarLogo">DT</h2>
            </div>
            <div className="navBarNavigation">
                <Link className="navBarLinkItem" to="/"><h4 >Home</h4></Link>
                <Link className="navBarLinkItem" to="/projects"><h4 >Projects</h4></Link>
                <Link className="navBarLinkItem" to="/about"><h4 >About</h4></Link>
            </div>
        </nav>

    )
}


export default NavBar;