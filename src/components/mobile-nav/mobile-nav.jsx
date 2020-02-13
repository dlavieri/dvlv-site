import React, { useState } from 'react';
import MenuIcon from '../menu-icon/menu-icon';
import './mobile-nav.css';
import photo from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Menu = props => {
    return (
        <ul className="dropdown-nav">
            <li onClick={props.slideback}><Link to="/">about</Link></li>
            <li onClick={props.slideback}><Link to="/projects">projects</Link></li>
            <li onClick={props.slideback}><Link to="/publications">publications</Link></li>
            {/* <li onClick={props.slideback}><Link to="/blog">blog</Link></li> */}
            <li><div className="nav-contact-me">
                <a href="https://angel.co/david-lavieri"><i className="fab fa-angellist"></i></a>
                <a href="https://linkedin.com/in/davidlavieri"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/dlavieri"><i className="fab fa-github"></i></a>
                <a href="https://medium.com/@dvlavieri"><i className="fab fa-medium"></i></a>
                <a href="https://instagram.com/dvlavieri"><i className="fab fa-instagram"></i></a>
            </div></li>
        </ul> 
    )
}

const MobileNav = () => {

    const [ menuOpen, toggleMenu ] = useState(false);

    return (
        <div className="nav">
            <div className="nav-mobile">
                <img src={photo} alt="David Lavieri" className="mobile-img"/>
                <h4 className="mobile-head">David Lavieri</h4>
                <MenuIcon toggle={() => toggleMenu(!menuOpen)} menuOpen={menuOpen}/>
            </div>
            <CSSTransition
                in={menuOpen}
                classNames="slidedown-nav"
                timeout={{enter: 100, exit: 300}}
                unmountOnExit >
                <Menu slideback={() => toggleMenu(!menuOpen)}/>
            </CSSTransition>
            
        </div>
    )
}

export default MobileNav;