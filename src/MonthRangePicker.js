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

  minSelectedYear() {
    return "2018";
  }

  maxSelectedYear() {
    return "2018";
  }

  minSelectedMonth() {
    return "2";
  }

  maxSelectedMonth() {
    return "5";
  }


  isMonthInSelectedRange(year, monthNumber) {
    if(this.state.selectedMonths.length === 2) {
      const minYear = parseInt(this.minSelectedYear(), 10);
      const maxYear = parseInt(this.maxSelectedYear(), 10);
      const currentYear = parseInt(year, 10);
      if((minYear <= currentYear) && (currentYear <= maxYear)) {
        const minMonth = parseInt(this.minSelectedMonth(), 10);
        const maxMonth = parseInt(this.maxSelectedMonth(), 10);
        const currentMonth = parseInt(monthNumber, 10);
        if((minMonth < currentMonth) && (currentMonth < maxMonth)) {
          return true;
        }
      }
    }
    return false;
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
        const selected = this.state.selectedMonths.includes(`${year}-${monthNumber}`);
        const inRange = this.isMonthInSelectedRange(year, monthNumber);

        return(
          <span
            key={monthName}
            className={classnames(
              "month-range-picker-month",
              {
                selected: selected,
                "in-range": inRange
              }
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
