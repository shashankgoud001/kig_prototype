import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Styles from './Home.module.css'
import people from "../media/pexels-rodnae-productions-7414009.jpg"
import people2 from "../media/what we do.jfif"
const Home = () => {
    return (
        <div className={Styles.main}>
            <div id={Styles.wallpaper}>
                <div id={Styles.text_box} >
                    <h1 id={Styles.title}>Kharagpur Investments Group</h1>
                    <h3 id={Styles.slogan}>Your Journey to Financial Freedom Starts Here</h3>
                    {/* <button>Join us</button> */}
                    {/* <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "Welcomes You...",
                                "Let's talk about finance...",
                                "Stocks...",
                                "Investments..."
                            ],
                        }}
                    /> */}
                </div>
            </div>
            <div id={Styles.content}>
                <Container>
                    <Row >
                        <Col sm={6} id={Styles.section1}>
                            <div id={Styles.tab}>
                                <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }} id={Styles.writeup} >
                                    <h3>Who Are We?</h3>
                                    <p>Kharagpur Investment Group (KIG) is an initiative by the students to spread the awareness of market and finance among the enthusiasts who wish to pursue it as a full-time career, or wish to start their own investment firm.</p>
                                </motion.div >
                                <br />
                                <Link to='/about' style={{ textDecoration: 'none' }}><button className={Styles.glowbtn}>About Us</button></Link>
                            </div>
                        </Col>
                        <Col sm={5} id={Styles.section1} >
                            <div >
                                <img src={people} id={Styles.people} alt="" className='img-thumbnail img-fluid ' />
                                {/* <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    whileTap={{
                                        scale: 1,
                                        rotate: 360,
                                        borderRadius: "150%"
                                    }}
                                >
                                    
                                </motion.div > */}
                            </div>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

                    <Row>
                        <Col sx={4} lg={true} id={Styles.section1} >
                            <div id={Styles.imgbox} >
                                <img src={people2} id={Styles.people2} alt="" className='img-thumbnail img-fluid ' />
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
                                    <h3>What We Do?</h3>
                                    <p>Kharagpur Investment Group (KIG) is an initiative by the students to spread the awareness of market and finance among the enthusiasts who wish to pursue it as a full-time career, or wish to start their own investment firm.</p>
                                </motion.div >
                                <br />
                                <Link to='/Events' id={Styles.btm} style={{ textDecoration: 'none' }}><button className={Styles.glowbtn}>Events</button></Link>
                            </div>
                        </Col>
                    </Row>
                    </motion.div>
                </Container>
                <br /><br /><br />
            </div>
        </div >
    );
}

export default Home;