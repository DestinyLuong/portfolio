import React, { Component } from 'react';
import logo from '../logo.svg';
import profpic from '../images/profpic.jpg';
//import '../App.css';
import {CardColumns, Figure} from 'react-bootstrap';

function HomePage() {

    return (
      <div className="HomePage">
        <div className='Bio'>
                <div className="bioDiv">
                    <div className="bioRow">
                        <div className="profDiv">
                            <Figure className='prof'>
                            <Figure.Image
                                id="profile"
                                width={250}
                                height={250}
                                alt="171x180"
                                src={profpic}
                        
                            />
                            </Figure>
                        </div>
                        <div className="infoDiv">
                                <div className= "TitleDiv">
                                    <h1 className= "Title">
                                        Destiny Luong
                                    </h1>
                                </div> 
                                <div className='captionDiv'>
                                <Figure>
                                <Figure.Caption color="black">
                                    Hello, my name is Destiny! I'm a senior EECS major at UC Berkeley.
                                    My dream is to combine my interests in tech and art to create something amazing!
                                    Hello, my name is Destiny! I'm a senior EECS major at UC Berkeley.
                                    My dream is to combine my interests in tech and art to create something amazing!
                                    Hello, my name is Destiny! I'm a senior EECS major at UC Berkeley.
                                    My dream is to combine my interests in tech and art to create something amazing!
                                </Figure.Caption>
                                </Figure>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
          
       
    </div>
 
      
    );
  }
  
  export default HomePage;
  