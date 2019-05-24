import React from 'react';
import './Week.css'

const Week = () => {
    return(
        <div className='week'>
            <div className='sunday'>일</div>
            <div className='other'>월</div>
            <div className='other'>화</div>
            <div className='other'>수</div>
            <div className='other'>목</div>
            <div className='other'>금</div>
            <div className='saturday'>토</div>
        </div>
    );
};

export default Week