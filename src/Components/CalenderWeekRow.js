import React from "react";
import PropTypes from "prop-types";
import Styles from '../Components/Events.module.css'

import CalendarEvent from "./CalenderEvents.js";

const CalendarWeekRow = (props) => {
    const { year, month, dates, events } = props;

    return (
        <div className={Styles.calendarweekrowcontainer}>
            {dates.map((date) => (
                <span
                    className={Styles.calendarweekrowdayheader}
                    style={
                        date.getFullYear() !== year || date.getMonth() !== month - 1
                            ? { color: "#bbb", fontWeight: "400" }
                            : { color: "#000", fontWeight: "600" }
                    }
                    key={date}
                >
                    {date.getDate()}
                </span>
            ))}
            {events.map((event) => {
                const col =
                    dates.findIndex(
                        (date) => date.valueOf() === event.beginDate.valueOf()
                    ) + 1 || 1,
                    colSpan =
                        (dates.findIndex(
                            (date) => date.valueOf() === event.endDate.valueOf()
                        ) + 1 || 7) -
                        col +
                        1;

                return (
                    <CalendarEvent
                        title={event.title}
                        col={col}
                        colSpan={colSpan}
                        key={event.id}
                        onClick={() => alert(`${event.title} Clicked!`)}
                    />
                );
            })}
        </div>
    );
};
CalendarWeekRow.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired
};
CalendarWeekRow.defaultProps = {
    events: []
};

export default CalendarWeekRow;
