import React from 'react';
import './layout.css';

const Layout = props => {
    return (
        <div className="layout-container">
            {props.children}
        </div>
    )
}

export default Layout;