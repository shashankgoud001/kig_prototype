import React from 'react'
import Styles from './Card.module.css'
const Card = (props) => {
    
    console.log(props)
    return (
        <div id={Styles.card}>
            <div id={Styles.info}>
                <div id={Styles.name}>John DOA</div>
                <div id={Styles.prof}>Designer</div>
                <div id={Styles.divider}></div>
                <div id={Styles.bio}>
                    A breif analysis about the chemical sector. Focusing mainly on speciality chemicals.
                </div>
                <button id={Styles.button}>View Document</button>
            </div>
            <div id={Styles.photo} ></div>
            <a id={Styles.a} href='#'>Speciality Chemicals Analysis</a>
        </div>
    )
}

export default Card
