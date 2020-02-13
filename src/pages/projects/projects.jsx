import React from 'react';
import jamify from '../../assets/jamify.png';
import minesweeper from '../../assets/minesweeper.png';
import './projects.css';
import Layout from '../../components/layout/layout';

const ProjectsPage = props => {
    
    return (
        <div>
            <Layout>
                <div className="projects-main">
                    <h4>Projects</h4>
                    <hr/>
                    <div className="project">
                        <div className="project-title"><h5><a className="blue-a" href="https://jamify-muzik.herokuapp.com">Jamify</a></h5></div>
                        <div className="img-container"><img src={jamify} alt="jamify-muzik" className="project-img jamify"/></div>
                        <p>A music app for listening, favoriting, and uploading your favorite license-free music.</p>
                        <ul>
                            <li>Designed, created and deployed REST API for uploading, collecting, and serving music to users.</li>
                            <li>Designed and built fully responsive frontend UX/UI for a multi-page application, with seamless music playing between pages.</li>
                            <li>Built a customer Audio Control component, which can play, pause, and resume music chosen by the user.</li>
                            <li>Frontend Stack: React.js, Redux, Redux Thunk, Jest, Enzyme, Axios</li>
                            <li>Backend Stack: Node.js, Express, PostgreSQL</li>
                            <li>View github repository <a className="blue-a" href="https://github.com/dlavieri/jamify">here</a></li>
                        </ul>
                    </div>

                    <div className="project">
                        <div className="project-title"><h5><a className="blue-a" href="https://sad-yalow-e139db.netlify.com/">Minesweeper</a></h5></div>
                        <div className="img-container"><img src={minesweeper} alt="minesweeper" className="project-img minesweeper"/></div>
                        <p>Clear the map as fast as you can, but don't trip any of the mines!</p>
                        <ul>
                            <li>Built the classic computer game, with clicks to clear, doubleclicks to flag, and a timer that begins as soon as you start.</li>
                            <li>Built with Test Driven Development, writing tests in Jest/Enzyme before building components</li>
                            <li>Frontend Stack: React.js, Jest, Enzyme</li>
                            <li>View github repository <a className="blue-a" href="https://github.com/dlavieri/minesweeper">here</a></li>
                        </ul>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ProjectsPage;