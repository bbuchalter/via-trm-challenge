import React, { Component } from 'react';

class CalendarYear extends Component {
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

    const months = monthNames.map((monthName) =>
      <span className="calendar-month">{monthName}</span>
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
