import React, { Component } from "react";
import "../css/Clock.css";
//props: time{hours,minutes,seconds}
//set hours & period
class Clock extends Component {
  state = {
    hours: this.props.time.hours,
    period: "ᴀᴍ"
  };
  componentDidMount() {
    this.setHours();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.time.hours !== this.props.time.hours) {
      this.setHours();
    }
  }
  setHours() {
    const period = ["ᴀᴍ", "ᴘᴍ"];
    if (this.props.time.hours > 12) {
      const hours = (this.props.time.hours -= 12);
      this.setState({
        hours: hours.toString().length < 2 ? "0" + hours : hours,
        period: period[1]
      });
      return;
    }
    this.setState({
      period: period[0]
    });
  }
  render() {
    return (
      <div className="clock">
        {this.state.hours}:{this.props.time.minutes}:{this.props.time.seconds}
        <span className="clock__period"> {this.state.period}</span>
      </div>
    );
  }
}

export default Clock;
