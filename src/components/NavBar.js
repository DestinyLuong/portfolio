import {Nav, Navbar} from 'react-bootstrap';




//import 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Destiny's Portfolio</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}


export default NavBar;
