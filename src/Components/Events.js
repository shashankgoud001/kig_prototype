import Typewriter from 'typewriter-effect';
import Styles from '../Components/Events.module.css'
import React, { useState, useEffect } from "react";

import Calendar from "./Calender.js";

const Events = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [events, setEvents] = useState([]);

    const loadPrevMonth = () => {
        let prevMonth = month - 1;
        if (prevMonth < 1) {
            setYear(year - 1);
            prevMonth = 12;
        }
        setMonth(prevMonth);
    };

    const loadNextMonth = () => {
        let nextMonth = month + 1;
        if (nextMonth > 12) {
            setYear(year + 1);
            nextMonth = 1;
        }
        setMonth(nextMonth);
    };

    useEffect(() => {
        const newEvents = [];
        for (let i = 0; i < 5; i++) {
            const beginDay = Math.floor(Math.random() * 28),
                endDay = Math.min(beginDay + Math.floor(Math.random() * 8), 28);
            newEvents.push({
                id: i + 1,
                title: `Event ${i + 1}`,
                beginDate: new Date(year, month - 1, beginDay),
                endDate: new Date(year, month - 1, endDay)
            });
        }
        setEvents(newEvents);
    }, [year, month]);

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
            <div className={Styles.cal}>
                <div className={Styles.appcontainer}>
                    <div className={Styles.appcontrols}>
                        <button className={Styles.nextprevbutton} onClick={loadPrevMonth}>
                            &laquo; Prev Month
                        </button>
                        <button className={Styles.nextprevbutton} onClick={loadNextMonth}>
                            Next Month &raquo;
                        </button>
                    </div>
                    <Calendar year={year} month={month} events={events} />
                </div>
            </div>
        </div>

    );
};

export default Events;
