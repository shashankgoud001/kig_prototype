import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from '../Components/Events.module.css'

const Label = styled.span`
  grid-column: ${(props) => props.col} / span ${(props) => props.colSpan};
`;

const CalendarEvent = (props) => {
    const { title, col, colSpan, onClick } = props;

    return (
        <span
            className={Styles.calendareventlabel}
            styled={{
                gridColumnStart: col,
                gridColumnEnd: `span ${colSpan}`
            }}
            onClick={onClick}
        >
            {title}
        </span>
    );
};
CalendarEvent.propTypes = {
    title: PropTypes.string,
    col: PropTypes.number,
    colSpan: PropTypes.number,
    onClick: PropTypes.func
};
CalendarEvent.defaultProps = {
    title: "",
    col: 1,
    colSpan: 1,
    onClick: () => { }
};

export default CalendarEvent;
