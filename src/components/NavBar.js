import { render } from '@testing-library/react';
import {Nav, Navbar} from 'react-bootstrap';




//import 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/portfolio">Destiny's Portfolio</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/portfolio">Home</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contacts">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}


export default NavBar;
