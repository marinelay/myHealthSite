import React, {Component} from 'react';
import dateFns, { isSameDay } from 'date-fns';
import './DayList.css';
import Day from './Day';

class DayList extends Component {
    render() {
        const {curMonth, dayInfo, dayPress} = this.props;

        const monthStart = dateFns.startOfMonth(curMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while(day <= endDate) {
            for(let i = 0; i<7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;

                const index = dayInfo.findIndex(info => isSameDay(cloneDay, info.day));
                let selected;
                let flag;
                if(index === -1) {
                    flag = 0;
                } else {
                    selected = dayInfo[index];
                    flag = selected.flag;
                }

                days.push(
                    <div className={`${!dateFns.isSameMonth(day, monthStart) ? "disabled" : ""}`}>
                        <span className = {`cells ${flag===0 ? '' : (flag===1 ? 'success' : 'fail')}`} onClick={() => dayPress(cloneDay)}>{formattedDate}</span>
                    </div>
                );

                day = dateFns.addDays(day, 1);
            }

            rows.push(
                <div className='week-rows'>{days}</div>
            );

            days = [];
        }

        return (
            <div className='day-body'>{rows}</div>
        );
    }
}

export default DayList