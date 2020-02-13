import React from 'react';
import { medium, accenture } from './pubs';
import Publication from '../../components/publication/pub';
import Layout from '../../components/layout/layout';
import './publications.css';


const PubPage = props => {

    return (
        <div>
        <Layout>
            <div className="pub-main">
                <h4>Medium Posts</h4>
                <div className="pub-list">
                    { medium.map((post, index) => {
                        return <Publication
                            key={index}
                            title={post.title}
                            squib={post.squib}
                            date={post.date}
                            source={post.source}
                            link={post.link} />
                    })}
                </div>
            </div>  
            <div className="pub-main tl">
                <h4>Thought Leadership</h4>
                <div className="pub-list">
                    { accenture.map((post, index) => {
                        return <Publication
                            key={index}
                            title={post.title}
                            squib={post.squib}
                            date={post.date}
                            source={post.source}
                            link={post.link} />
                    })}
                </div>
            </div>  
            <div className="contact-me">
                <a href="mailto:dvlavieri@gmail.com">email me <i className="far fa-paper-plane"></i></a>
            </div>
        </Layout>
        </div>
    )
}

export default PubPage;