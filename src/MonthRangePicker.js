import React, { Component } from 'react';
import _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';

class MonthRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDates: []
    };
  }

  selectDate(date) {
    this.setState(prevState => {
      if(prevState.selectedDates.length === 2) {
        return (
          { selectedDates: [date] }
        )
      } else {
        return (
          { selectedDates: prevState.selectedDates.concat([date]) }
        )
      }
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

  backGroundColorByDate(date) {
    if(this.isDateInSelected(date)) {
      return "aqua";
    } else if(this.isDateInSelectedRange(date)) {
      return "lightgray";
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
          <FlatButton
            key={monthName}
            onClick={(e) => this.selectDate(date)}
            backgroundColor={this.backGroundColorByDate(date)}
            hoverColor={this.backGroundColorByDate(date)}
            style={{
              border: '',
            }}
          >
            {monthName}
          </FlatButton>
        );
      })
    )
  }

  render() {
    return this.props.years.split(",").map((year) =>
      <div key={year} className="month-range-picker-year">
        <div className="month-range-picker-year-number">{year}</div>
        <div>
          { this.monthsFor(parseInt(year, 10)) }
        </div>
      </div>
    );
  }
}

export default MonthRangePicker;
