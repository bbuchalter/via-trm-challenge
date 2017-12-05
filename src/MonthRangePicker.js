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
      month: monthNumber,
      date: new Date(yearNumber, monthNumber-1)
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

  minSelectedDate() {
    return _.minBy(this.state.selectedMonths, (date) => date.date)
  }

  maxSelectedDate() {
    return _.maxBy(this.state.selectedMonths, (date) => date.date)
  }

  isDateInSelectedRange(date) {
    if(
      this.state.selectedMonths.length === 2 &&
      date >= this.minSelectedDate().date &&
      date <= this.maxSelectedDate().date
    ) {
      return true;
    } else {
      return false;
    }
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
        const date = new Date(yearNumber, index);
        const monthNumber = (index+1);
        const selected = _.some(this.state.selectedMonths, {year: yearNumber, month: monthNumber});
        const inRange = this.isDateInSelectedRange(date);

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
