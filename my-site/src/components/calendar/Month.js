import React from 'react';
import './Month.css';
import dateFns from 'date-fns';

const Month = ({prevPress, nextPress, curMonth}) => {
    let dateFormat = "MM";
    let formattedDate = dateFns.format(curMonth, dateFormat);

    return(
        <div className="month">
            <div className="prev-button" onClick={prevPress}>이전</div>
            <div className="month-text">{formattedDate}월</div>
            <div className="next-button" onClick={nextPress}>다음</div>
        </div>
    );
};

export default Month;