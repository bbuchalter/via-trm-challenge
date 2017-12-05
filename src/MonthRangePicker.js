import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

class MonthRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDates: []
    };
  }

  selectDate(date) {
    this.setState(prevState => {
      let newSelectedDates;
      if(prevState.selectedDates.length === 2) {
        newSelectedDates = [date];
      } else {
        newSelectedDates = prevState.selectedDates.concat([date]);
      }

      return (
        { selectedDates: newSelectedDates }
      );
    });
  }

  isDateInSelected(date) {
    return _.some(this.state.selectedDates, (selectedDate) => {
      return selectedDate.valueOf() === date.valueOf()
    })
  }

  isDateInSelectedRange(date) {
    if(
      this.state.selectedDates.length === 2 &&
      date > _.min(this.state.selectedDates) &&
      date < _.max(this.state.selectedDates)
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
        <div>
          { this.monthsFor(parseInt(year, 10)) }
        </div>
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
