import React from 'react';
import NavBar from '../components/NavBar';
import {Figure, Col} from 'react-bootstrap';

function Contact() {

  return (
    <div className="Contact">
       <div className= "HeadingDiv">
            <h1 className= "Heading" id="contacts">
                Contacts
            </h1>
        </div> 
        <div className= "Body">
            <Figure>
                <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180"
                    src={"data:image/png;base64,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"}
                />
                <Figure.Caption
                font-size={1.5}>
                <h3 className = "gm">Gmail: destinyul2010@gmail.com</h3>
                </Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180"
                    src={'data:image/png;base64,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'}
                />
                <Figure.Caption
                font-size={1.5}>
                    <a
                        className="App-link"
                        href="https://www.linkedin.com/in/destiny-luong/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        LinkedIn
                    </a>
                </Figure.Caption>
            </Figure>
        </div>
        
    </div>
    
    
  );
}

export default Contact;
