import React, {Component} from 'react';
import dateFns from 'date-fns';
import './DayList.css'

class DayList extends Component {
    render() {
        const {curMonth} = this.props;

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
                    <div classNama='date'>{formattedDate}</div>
                );

                day = dateFns.addDays(day, 1);
            }

            rows.push(
                <div>{days}</div>
            );
        }

        return (
            <div>{rows}</div>
        );
    }
}

export default DayList