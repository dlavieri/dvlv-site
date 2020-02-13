import React from 'react';
import './pub.css';

const Publication = props => {

    return (
        <div className="pub-card">
            <h5 className="pub-title"><a href={props.link}>{props.title}</a></h5>
            <p className="pub-squib-text">{props.squib}</p>
            <div className="pub-details">
                <span className="pub-source">{props.source}</span>
                <span className="pub-date">{props.date}</span>
            </div>
        </div>
    )
}

export default Publication;