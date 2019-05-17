import React, { Component } from "react";
//change to props?
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
      <div className="day">
        {this.state.month} {this.state.day} {this.state.year}{" "}
        {this.state.dayName}
      </div>
    );
  }
}

export default Day;
