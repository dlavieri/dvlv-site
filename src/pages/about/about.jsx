import React from 'react';
import './about.css';
import Layout from '../../components/layout/layout';

const AboutPage = props => {

    return (
        <div className="about-main">
            <Layout>
                <h2>David Lavieri</h2>
                <h3>Software Engineer, in San Francisco</h3>
                <hr/>
                <p>For the last five years, I have been working in technology thought leadership at Accenture.
                    In practice, this means ideating hypotheses about use cases, limits, and opportunities for new technology in the horizon of the next five years.
                </p>
                <p>
                    While it has been very interesting and rewarding work, my interest in technology has changed.
                    Where I have previously been an outside observer, my passion for technology has pulled me closer to the machine -- I am pursuing a career as an active contributor, as a software engineer.
                </p>
                <p>
                    Beginning in October of 2018, I began this pursuit on Codecademy's Front End Web Development track, which I quickly finished.
                    From there I began a model of learning-by-doing, deepening and expaning my skill beyond the online curriculum of HTML, CSS, and basic Javascript, to include React and its related packages, the tools of Test Driven Development, an understanding of building REST APIs on the backend in Node and Express, and more.
                </p>
                <p>
                    This education by practice has accumulated in a number of small applications, which can be found at my <a className="blue-a" href="https://github.com/dlavieri">github</a>, and my larger-scale project, a license-free music sharing application called Jamify Muzik, which can be found deployed <a className="blue-a" href="https://jamify-muzik.herokuapp.com">here</a> (n.b. you will need to signup, as access to the application requires authentication).
                </p>
                <p>
                    My interest in technology has transformed since I first printed "Hello World" to the virtual console in the Codecademy sandbox.
                    Today my interest has become a passion.
                    I want to bring that passion, and a lifelong love of learning and growth to a fulltime Software Engineer role. 
                    If you are looking to fill such a role, please to not hesitate to reach out to me!
                </p>
                <hr/>
                <div className="contact-me">
                    <a href="mailto:dvlavieri@gmail.com">email me <i className="far fa-paper-plane"></i></a>
                    
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage;