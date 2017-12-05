import React, { Component } from 'react';

class MonthRangePicker extends Component {

  selectMonth(monthName, monthNumber, year) {
    console.log(monthName, monthNumber, year)
  }

  monthsFor(year) {
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

    return (
      monthNames.map((monthName, index) =>
        <span
          key={monthName}
          className="month-range-picker-month"
          onClick={(e) => this.selectMonth(monthName, (index+1), year)}
        >
          {monthName}
        </span>
      )
    )
  }

  render() {
    const years = this.props.years.split(",").map((year) =>
      <div key={year} className="month-range-picker-year">
        <div className="month-range-picker-year-number">{year}</div>
        { this.monthsFor(year) }
      </div>
    );

    return (
      <div className="month-range-picker">
        {years}
      </div>
    );
  }
}

export default MonthRangePicker;
