import React, {Component} from 'react';
import dateFns from 'date-fns';
import './DayList.css'

class DayList extends Component {
    render() {
        const {curMonth, dayPress} = this.props;

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
                days.push(
                    <div className={`${!dateFns.isSameMonth(day, monthStart) ? "disabled" : ""}`}>
                    <span className ='cells' onClick={dayPress}>{formattedDate}</span>
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