import React, { Component } from "react";
import "../css/Day.css";
//change to props?
//have componentDidUpdate
class Day extends Component {
  state = {
    day: "",
    month: "",
    year: "",
    dayName: ""
  };
  componentWillMount() {
    this.date();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.date !== this.props.date){
      this.date();
    }
  }
  date = () => {
    const days = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat"
    };
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    }
    const d = this.props.date;
    this.setState({
      day: d.getDate().toString().length < 2
        ? "0" + d.getDate()
        : d.getDate(),
      month: months[d.getMonth()],
      year: 1900 + d.getYear(),
      dayName: days[d.getDay()]
    });
  };
  render() {
    return (
      <div className="day">
        {this.state.month}, {this.state.day} {this.state.year}
      </div>
    );
  }
}

export default Day;
