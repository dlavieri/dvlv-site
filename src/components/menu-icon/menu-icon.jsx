import React from 'react';
import './menu-icon.css';


function MenuIcon (props) {
    
    const { menuOpen } = props;
    console.log(props);
    return (
        <div className={menuOpen ? "menu-icon __active" :"menu-icon"} id="menuToggler" onClick={props.toggle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )

}

export default MenuIcon;