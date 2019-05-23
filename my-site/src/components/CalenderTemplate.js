import React from 'react';
import './CalenderTemplate.css';

const CalenderTemplate = ({month, day}) => {
    return(
        <main className = "calender-template">
        <div className = "title">나만의 헬스케어</div>
        <section className = "month"> {month} </section>
        <secttion className = " day"> {day} </secttion>
        </main>
    );
};
