import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
        <Switch>
          <Route path="/HomePage.js" exact component={() => <HomePage />} />
          <Route path="/Projects.js" exact component={() => <Projects />} />
          <Route path="/Contact.js" exact component={() => <Contact />} />
        </Switch>
      </Router> 
   
      </div>
     
  );
}

export default App;
