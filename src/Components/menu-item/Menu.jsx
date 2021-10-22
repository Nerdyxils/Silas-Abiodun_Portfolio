import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { ReactComponent as CloseMenu } from '../../assets/x.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import './Menu.css'

export default function Menu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <NavLink className="logo-container" to="/">
                <img src={Logo} alt="logo" className="logo" />
            </NavLink>
            <div className={click ? "options active" : "options"}>
                <NavLink className="option" to="/" onClick={closeMobileMenu}>
                    Home
                </NavLink>
                <NavLink className="option" to="/About" onClick={closeMobileMenu} activeClassName="clicked">
                    About
                </NavLink>
                <NavLink className="option" to="/services" onClick={closeMobileMenu} activeClassName="clicked">
                    Services
                </NavLink>
                <NavLink className="option" to="/projects" onClick={closeMobileMenu} activeClassName="clicked">
                    Projects
                </NavLink>
                <NavLink className="option" to="/contact" onClick={closeMobileMenu} activeClassName="clicked">
                    Contact
                </NavLink>
            </div>
            
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    )
}