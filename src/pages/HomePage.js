import React from 'react';
import profpic from '../images/profpic.jpg';
//import '../App.css';
import {Figure} from 'react-bootstrap';

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
                                        DESTINY LUONG
                                    </h1>
                                </div> 
                                <div className='captionDiv'>
                                <Figure>
                                <Figure.Caption color="black">
                                    Hello, my name is Destiny! I'm a graduate of UC Berkeley who majored in EECS. 
                                    I really love to draw and create, but I also really love answering puzzles and solving issues
                                    which is why I decided to become a programmer. I think being able to create websites, games, 
                                    softwares, and more through a few lines of code is so cool! Ultimately though, 
                                    my dream is to combine my interests in tech and art to create something amazing! So if you're
                                    also interested in these things let's talk!
                                    
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
  