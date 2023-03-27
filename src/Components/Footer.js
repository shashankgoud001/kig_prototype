import { Container, Row, Col } from "react-bootstrap";
import { FaCopyright, FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Styles from './Footer.module.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="p-3" id={Styles.footer} >
                <Container>
                    <Row className="justify-content-md-center text-white">
                        <Col sm={3}>
                            <h5>About Us</h5>
                            <p id={Styles.footer_text}>K.I.G is an initiative to spread awareness about the investment field and make enthusiastic students more capable of making financial decisions.
                            </p>
                        </Col>
                        <Col sm={3}>
                            <h5>Navigation</h5>
                            <ul >
                                <li><Link className="text-white text-decoration-none">Home</Link></li>
                                <li><Link className="text-white text-decoration-none">About Us</Link></li>
                                <li><Link className="text-white text-decoration-none">Events</Link></li>
                                <li><Link className="text-white text-decoration-none">Contact US</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <Row >
                                <h7>Connect with us</h7>
                                <Col >
                                    <a href="https://www.facebook.com/KIG.IIT.KGP/"><FaFacebookSquare className="text-white ms-1" size='40' /></a>
                                </Col>
                                <Col >
                                    <a href="https://www.instagram.com/k.i.g_iitkgp/?igshid=1sf5u3ycx2t45"><FaInstagram className="text-white " size='40' /></a>
                                </Col>
                                <Col >
                                    <a href="https://www.linkedin.com/company/kharagpurinvestmentgroup?originalSubdomain=in"><FaLinkedin className="text-white ms-1" size='40' /></a>
                                </Col>
                                <Col >
                                    <a href=""><FaYoutube className="text-white ms-1" size='40' /></a>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className=" p-2" id={Styles.footerbottom}>
                <Container>
                    <p className="text-center text-white mt-3">Copyright <FaCopyright /> 2023, KIG. All Rights Reserved.</p>
                </Container>
            </div>
        </div>
    );
}

export default Footer;