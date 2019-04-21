import React, { Component } from "react";

class Day extends Component {
  state = {
    day: "",
    month: "",
    year: "",
    dayName: ""
  };
  componentWillMount() {
    this.date();
    setInterval(this.date, 1800000);
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
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    }
    var d = new Date();
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
      <div>
        {this.state.month} {this.state.day} {this.state.year}{" "}
        {this.state.dayName}
      </div>
    );
  }
}

export default Day;
