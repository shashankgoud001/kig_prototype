import { Container, Row, Col } from 'react-bootstrap';
import Styles from '../Components/Contact.module.css'
import { MdPlace, MdCall, MdEmail } from 'react-icons/md';
import Typewriter from 'typewriter-effect';
const ContactUs = () => {
    return (
        <div>
            <div id={Styles.wallpaper}>
                <div id={Styles.text_box} >
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "Kharagpur Investments Group",
                                "Contact Us..."
                            ],
                        }}
                    />
                </div>
            </div>

            <div id={Styles.content}>
                <Container>
                    <br />
                    <Row>
                        <Col lg={true}>
                            <div id={Styles.us}>
                                <Row>
                                    <div className={Styles.box}>
                                        <div className={Styles.icon}><MdPlace /></div>
                                        <div className={Styles.text}>
                                            <h3>Address</h3>
                                            <p>IIT Kharagpur</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row><div className={Styles.box}>
                                    <div className={Styles.icon}><MdCall /></div>
                                    <div className={Styles.text}>
                                        <h3>Phone</h3>
                                        <p>944162170</p>
                                    </div>
                                </div></Row>
                                <Row><div className={Styles.box}>
                                    <div className={Styles.icon}><MdEmail /></div>
                                    <div className={Styles.text}>
                                        <h3>Email</h3>
                                        <p>xyz@gmail.com</p>
                                    </div>
                                </div></Row>
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div id={Styles.form}>
                                <div className={Styles.loginbox}>
                                    <h2>Contact Us</h2>
                                    <form>
                                        <div className={Styles.userbox}>
                                            <input type="text" name="" required="" />
                                            <label>Email</label>
                                        </div>
                                        <div className={Styles.userbox}>
                                            <input type="text" name="" required="" />
                                            <label>Message</label>
                                        </div>
                                        <a id={Styles.subbtn}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Submit
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br /><br />
            </div>
        </div>

    );
}

export default ContactUs;