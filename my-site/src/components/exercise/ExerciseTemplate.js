import React, {Component} from 'react';
import './ExerciseTemplate.css';

class ExerciseTemplate extends Component {
    render() {
        const {dayInfo} = this.props;

        const weight = dayInfo.reduce((acc, cur, i) => {
            if(dayInfo[i].flag === 1) return acc + 1;
            if(dayInfo[i].flag === 2) return acc - 1;
            return acc;
        }, 0);

        return (
            <div className='exercise-template'>
                <div>프레스 : {weight}</div>
                <div>로우 : {weight}</div>
                <div>친업 : {weight}</div>
                <div>스쿼트 : {weight}</div>
                <div>데드리프트 : {weight}</div>
                <div>벤치프레스 : {weight}</div>
            </div>
        )
    }
}

export default ExerciseTemplate