import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

class MonthRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonths: []
    };
  }

  yearAndMonthAsObj(yearNumber, monthNumber) {
    return({
      year: yearNumber,
      month: monthNumber
    });
  }

  selectMonth(monthNumber, yearNumber) {
    this.setState(prevState => {
      let newSelectedMonths;
      if(prevState.selectedMonths.length === 2) {
        newSelectedMonths = [this.yearAndMonthAsObj(yearNumber, monthNumber)];
      } else {
        newSelectedMonths = prevState.selectedMonths.concat([this.yearAndMonthAsObj(yearNumber, monthNumber)]);
      }

      return (
        { selectedMonths: newSelectedMonths }
      );
    });
  }

  minSelectedYear() {
    return 2018;
  }

  maxSelectedYear() {
    return 2018;
  }

  minSelectedMonth() {
    return 2;
  }

  maxSelectedMonth() {
    return 5;
  }


  isMonthInSelectedRange(yearNumber, monthNumber) {
    if(this.state.selectedMonths.length === 2) {
      const minYear = this.minSelectedYear();
      const maxYear = this.maxSelectedYear();
      const currentYear = yearNumber;
      if((minYear <= currentYear) && (currentYear <= maxYear)) {
        const minMonth = this.minSelectedMonth();
        const maxMonth = this.maxSelectedMonth();
        const currentMonth = monthNumber;
        if((minMonth < currentMonth) && (currentMonth < maxMonth)) {
          return true;
        }
      }
    }
    return false;
  }

  monthsFor(yearNumber) {
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
        const selected = _.some(this.state.selectedMonths, {year: yearNumber, month: monthNumber});
        const inRange = this.isMonthInSelectedRange(yearNumber, monthNumber);

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
            onClick={(e) => this.selectMonth(monthNumber, yearNumber)}
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
        { this.monthsFor(parseInt(year, 10)) }
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
