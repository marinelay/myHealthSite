import React from 'react';
import './ExerciseTemplate.css';

const ExerciseTemplate = ({success}) => {
    return (
        <div className='exercise-template'>
            <div>프레스 : {success}</div>
            <div>로우 : {success}</div>
            <div>친업 : {success}</div>
            <div>스쿼트 : {success}</div>
            <div>데드리프트 : {success}</div>
            <div>벤치프레스 : {success}</div>
        </div>
    );
};

export default ExerciseTemplate