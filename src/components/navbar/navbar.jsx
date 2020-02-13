import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import photo from '../../assets/profile.jpg';

const NavBar = props => {

    return (
        <div className="navbar-container">
            <div className="nav-menu">
                <img src={photo} alt="David Lavieri" className="profile-img"/>
                <div>David Lavieri</div>
                <ul className="nav-ul">
                    <li><Link to="/">about</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/publications">publications</Link></li>
                    {/* <li><Link to="/blog">blog</Link></li> */}
                </ul>
            </div>
            <div className="nav-contact-me">
                <a href="https://angel.co/david-lavieri"><i className="fab fa-angellist"></i></a>
                <a href="https://linkedin.com/in/davidlavieri"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/dlavieri"><i className="fab fa-github"></i></a>
                <a href="https://medium.com/@dvlavieri"><i className="fab fa-medium"></i></a>
                <a href="https://instagram.com/dvlavieri"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default NavBar;