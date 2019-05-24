import React from 'react';
import './CalendarTemplate.css';

const CalendarTemplate = ({month, week, day}) => {
    return(
        <main className = "calendar-template">
        <div className = "title">나만의 헬스케어</div>
        <section className = "month-wrapper"> {month} </section>
        <section className = "week-wrapper"> {week} </section>
        <section className = "day-wrapper"> {day} </section>
        </main>
    );
};

export default CalendarTemplate;