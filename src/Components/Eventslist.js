import Styles from './Eventslist.module.css'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import React, { useState } from 'react';
import chemicalFactory from '../media/2.png'
const Eventslist = () => {
    const [isImage, setIsImage] = React.useState(true)
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
                                "Events..."
                            ],
                        }}
                    />
                </div>
            </div>
            {/* <div id={Styles.box}>
                <Card isImage={isImage}></Card>
            </div> */}
            <div className={Styles.box}>
                <div className={Styles.card}>
                    <div class={Styles.imgbox}>
                        <img src={chemicalFactory} />
                        <h2>Speciality Chemicals Analysis</h2>
                    </div>
                    <div class={Styles.content}>
                        <h2>Sector Analysis</h2>
                        <p>
                            A breif overiew and analysis of Speciality Chemicals
                        </p>
                        <a className={Styles.button} href="https://drive.google.com/file/d/19OTHtIKBPDVLVY0ydWU1CROKrSWtk9BC/view" >Read Report</a>
                    </div>

                </div>

            </div>
        </div>
    );
};


export default Eventslist;