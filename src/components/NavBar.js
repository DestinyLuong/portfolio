import { render } from '@testing-library/react';
import {Nav, Navbar} from 'react-bootstrap';



//import 'react-bootstrap';


/*<nav className='navBar'>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#p">Project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                </li>

            </ul>
        </nav> */


/* */

function NavBar() {
    return (
        
        <div>
            <div className="Navbar">
           <navbar>
                <Navbar className="nav justify-content-center" variant="dark">
                    <div className='nHome'>
                    <Navbar.Brand href="/portfolio">Destiny's Portfolio</Navbar.Brand>
                    </div>
                    <div className='nLinks'>
                    <Nav className="mr-auto">
                    <Nav.Link href="/portfolio">HOME</Nav.Link>
                    <Nav.Link href="/projects">PROJECTS</Nav.Link>
                    <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                    </Nav>
                    </div>
                </Navbar>
            </navbar>
            </div>
        </div>
    );
}


export default NavBar;
