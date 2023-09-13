import React, { Component } from 'react';
import logo from '../logo.svg';
import profpic from '../images/profpic.jpg';
//import '../App.css';
import {CardColumns, Figure} from 'react-bootstrap';

function HomePage() {

    return (
      <div className="HomePage">
        <div className= "TitleDiv">
            <h1 className="construct">Apologies this page is under construction!</h1>
            <h1 className= "Title">
                Destiny Luong
            </h1>
        </div> 
        <div>
                <Figure className='prof'>
                    <Figure.Image
                        id="profile"
                        width={250}
                        height={250}
                        alt="171x180"
                        src={profpic}
                        
                    />
                    <div className='caption'>
                        <Figure.Caption>
                            Hello, my name is Destiny! I'm a senior EECS major at UC Berkeley.
                            My dream is to combine my interests in tech and art to create something amazing!
                        </Figure.Caption>
                    </div>
                </Figure>
        </div>
          
       
    </div>
 
      
    );
  }
  
  export default HomePage;
  