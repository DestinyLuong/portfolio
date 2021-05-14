import React, { Component } from 'react';
import logo from '../logo.svg';
//import '../App.css';
import {Figure} from 'react-bootstrap';

function HomePage() {

    return (
      <div className="HomePage">
        <div className= "TitleDiv">
            <h1 className= "Title">
                Destiny Luong
            </h1>
        </div> 
        <div>
            <Figure>
                <Figure.Image
                    width={500}
                    height={500}
                    alt="171x180"
                    src={logo}
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
        </div>
          
       
    </div>
 
      
    );
  }
  
  export default HomePage;
  