import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import NavBar from './components/navbar/navbar';
import AboutPage from './pages/about/about';
import ProjectsPage from './pages/projects/projects';
import PubPage from './pages/publications/publications';
import BlogPage from './pages/blog/blog';

import MobileNav from './components/mobile-nav/mobile-nav';

function App() {
  return (
      <Router>
        <div className="app">
          <Row className="app-main-row">
            <Col xs={3} className="app-nav-col">
              <NavBar />
            </Col>

            <Col fluid className="app-main-col">
              <MobileNav />
              <Route exact path="/" component={AboutPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/publications" component={PubPage} />
              <Route path="/blog" component={BlogPage} />
            </Col>
          </Row>
        </div>
      </Router>
  );
}

export default App;
