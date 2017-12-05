import React, { Component } from 'react';

class CalendarYear extends Component {

  selectMonth(monthName, monthNumber, year) {
    console.log(monthName, monthNumber, year)
  }

  render() {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]

    const months = monthNames.map((monthName, index) =>
      <span
        key={monthName}
        className="calendar-month"
        onClick={(e) => this.selectMonth(monthName, (index+1), this.props.year)}
      >
        {monthName}
      </span>
    );

    return (
      <div className="calendar">
        <div className="calendar-year">
          {this.props.year}
        </div>
        {months}
      </div>
    );
  }
}

export default CalendarYear;
