import React, { Component } from 'react';
import classnames from 'classnames';

class MonthRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonths: []
    };
  }

  selectMonth(monthName, monthNumber, year) {
    this.setState(prevState => {
      let newSelectedMonths;
      if(prevState.selectedMonths.length === 2) {
        newSelectedMonths = [`${year}-${monthNumber}`];
      } else {
        newSelectedMonths = prevState.selectedMonths.concat([`${year}-${monthNumber}`]);
      }

      return (
        { selectedMonths: newSelectedMonths }
      );
    });
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
      monthNames.map((monthName, index) => {
        const monthNumber = (index+1);
        return(
          <span
            key={monthName}
            className={classnames(
              "month-range-picker-month",
              { selected: this.state.selectedMonths.includes(`${year}-${monthNumber}`) }
            )}
            onClick={(e) => this.selectMonth(monthName, monthNumber, year)}
          >
            {monthName}
          </span>
        );
      })
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
