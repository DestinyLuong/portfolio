import './App.css';
import React from 'react';
import Projects from './pages/Projects';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import {Nav, Navbar} from 'react-bootstrap';

import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <div className="Navbar">
              <Navbar className="nav justify-content-center" variant="dark">
                  <Navbar.Brand href="/portfolio">Destiny's Portfolio</Navbar.Brand>
                  <Nav className="mr-auto"  id="navlinks">
                    <Nav.Link href="/portfolio">Home</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contacts">Contacts</Nav.Link>
                  </Nav>
              </Navbar>
        </div>
        <div id="Pages">
          <HomePage/>
          <Projects/>
          <Contact/>
        </div>
      </Router> 
   
      </div>
     
  );
  /*<Switch>
          <Route path="/HomePage.js" exact component={() => <HomePage />} />
          <Route path="/Projects.js" exact component={() => <Projects />} />
          <Route path="/Contact.js" exact component={() => <Contact />} />
        </Switch>*/ 
}

export default App;
