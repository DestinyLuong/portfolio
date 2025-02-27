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
                    <Navbar.Brand href="/portfolio">Destiny's Portfolio</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/portfolio">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contacts">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </navbar>
            </div>
        </div>
    );
}


export default NavBar;
