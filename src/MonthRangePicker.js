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

  selectDate(date) {
    this.setState(prevState => {
      let newSelectedMonths;
      if(prevState.selectedMonths.length === 2) {
        newSelectedMonths = [date];
      } else {
        newSelectedMonths = prevState.selectedMonths.concat([date]);
      }

      return (
        { selectedMonths: newSelectedMonths }
      );
    });
  }

  isDateInSelected(date) {
    return _.some(this.state.selectedMonths, (selectedDate) => {
      return selectedDate.valueOf() === date.valueOf()
    })
  }

  isDateInSelectedRange(date) {
    if(
      this.state.selectedMonths.length === 2 &&
      date > _.min(this.state.selectedMonths) &&
      date < _.max(this.state.selectedMonths)
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

        return(
          <span
            key={monthName}
            className={classnames(
              "month-range-picker-month",
              {
                selected: this.isDateInSelected(date),
                "in-range": this.isDateInSelectedRange(date)
              }
            )}
            onClick={(e) => this.selectDate(date)}
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
