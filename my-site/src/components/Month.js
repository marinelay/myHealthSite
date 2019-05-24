import React from 'react';
import './Month.css';

const Month = ({prevPress, nextPress}) => {
    return(
        <div className="month">
            <div className="prev-button" onClick={prevPress}>이전</div>
            <div className="month-text">월</div>
            <div className="next-button" onClick={nextPress}>다음</div>
        </div>
    );
};

export default Month;