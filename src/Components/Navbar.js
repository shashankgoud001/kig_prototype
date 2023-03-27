import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../media/logo_kig-removebg-preview.png'
import { Link } from 'react-router-dom';
import Styles from './navbar.module.css'
const NavbarComp = () => {
    return (
        <div id={Styles.header} >
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/"} className="fs-2 ">
                        <img src={logo}
                            width={55}
                            height="45"
                            className="d-inline-block align-top" />{' '}
                        K.I.G
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav " >
                        <Nav expand="lg" className='ma-auto gap-3  '>
                            <Nav.Link as={Link} to={"/"} id={Styles.home}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"} id={Styles.home}>About Us</Nav.Link>
                            <Nav.Link as={Link} to={"/events"} id={Styles.home}>Events</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"} id={Styles.home}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;