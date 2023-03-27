import Typewriter from 'typewriter-effect';
import Styles from '../Components/AboutUs.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import people from "../media/pexels-huy-chien-tran-1756665 1.png"
import hands from "../media/pexels-fauxels-3184418 1.png"
const AboutUs = () => {
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
                                "About Us..."
                            ],
                        }}
                    />
                </div>
            </div>
            <div id={Styles.header}>
                <Container>
                    <Row><h1>Mission</h1></Row>
                    <br />
                    <Row id={Styles.header}>
                        <div id={Styles.mission}>
                            <p>“Our aim is that every student should be investing in any way to achieve financial freedom sooner.”</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div id={Styles.content}>
                <br /><br />
                <Container>
                    <h1>Our Story</h1>
                    <br /><br />
                    <Row >
                        <Col sm={6} id={Styles.section1}>
                            <div id={Styles.tab}>
                                <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} id={Styles.writeup} >
                                    <p>KIG is a student-led initiative focused on promoting the financial market, asset market, and personal finance knowledge. Our goal is to support students who have a passion for finance and seek to manage their wealth or pursue a career in finance.</p>
                                </motion.div >
                            </div>
                        </Col>
                        <Col sm={5} id={Styles.section1} >
                            <div >
                                <img src={people} id={Styles.people} alt="" className='img-thumbnail img-fluid ' />
                                {/* <motion.div
                                    whileHover={{ scale: 1.0, rotate: 360 }}
                                    whileTap={{
                                        scale: 0.9,
                                        rotate: 360,
                                        borderRadius: "100%"
                                    }}
                                >

                                </motion.div > */}
                            </div>
                        </Col>
                    </Row>
                    <div className={Styles.mouse_scroll}>

                        <div className={Styles.mouse}>
                            <div className={Styles.wheel}></div>
                        </div>
                        <div>
                            <span className={Styles.m_scroll_arrows} id={Styles.unu}></span>
                            <span className={Styles.m_scroll_arrows} id={Styles.doi} ></span>
                            <span className={Styles.m_scroll_arrows} id={Styles.v} ></span>
                        </div>
                    </div>
                    <br /><br />
                    <Row>
                        <Col sx={4} lg={true} id={Styles.section1} >
                            <div id={Styles.imgbox} >
                                <img src={hands} id={Styles.people2} alt="" className='img-thumbnail img-fluid ' />
                                {/* <motion.div
                                    whileHover={{ scale: 1.0, rotate: 360 }}
                                    whileTap={{
                                        scale: 0.9,
                                        rotate: 360,
                                        borderRadius: "100%"
                                    }}
                                >
                                    
                                </motion.div > */}
                            </div>
                        </Col>
                        <Col sx={7} lg={true} id={Styles.section1}>
                            <div id={Styles.tab2}>
                                <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} id={Styles.writeup} >
                                    <p>At KIG, we partner with leading corporations and educational institutions to provide students with a platform for exploring their career options and evaluating their future potential. </p>
                                </motion.div >
                                <br />
                            </div>
                        </Col>
                    </Row>
                    <div className={Styles.mouse_scroll}>

                        <div className={Styles.mouse}>
                            <div className={Styles.wheel}></div>
                        </div>
                        <div>
                            <span className={Styles.m_scroll_arrows} id={Styles.unu}></span>
                            <span className={Styles.m_scroll_arrows} id={Styles.doi} ></span>
                            <span className={Styles.m_scroll_arrows} id={Styles.v} ></span>
                        </div>
                    </div>
                    <br />
                    <Row id={Styles.header}>
                        <div id={Styles.story}>
                            <p>At KIG, we partner with leading corporations and educational institutions to provide students with a platform for exploring their career options and evaluating their future potential. We host workshops, competitions, guest lectures, and conferences, and collaborate with prominent industry leaders, experienced stock market professionals, and financial institutions.</p>
                        </div>
                    </Row>
                    <br /><br />
                </Container>
            </div>
        </div>
    );
}

export default AboutUs;