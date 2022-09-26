import React from 'react';
//import logo from '../logo.svg';
import '../App.css';
import NavBar from '../components/NavBar';
import {Figure} from 'react-bootstrap';
import { MyPlanet } from '../components/Planet';

function HomePage() {

    return (
      <div className="HomePage">
        <div className= "TitleDiv">
            <h1 className= "Title">
                Destiny Luong
            </h1>
            
        </div> 
        <MyPlanet/> 
        <div>
            <figure className="figure">
                <img src="../profile.jpg" className="prof" alt="..."></img>
                <figcaption className="figure-caption">A caption for the above image.</figcaption>
            </figure>
        </div>         
    </div>
 
      
    );
  }
  

  export default HomePage;
  