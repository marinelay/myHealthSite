import React, {Component} from 'react';
import './Day.css';

class Day extends Component {
    render() {
        const { day, flag, onPress } = this.props;

        return (
            <span className = 'cells' onClick={() => onPress(day)}>{day}</span>
        );
    }
}

export default Day