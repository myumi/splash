import React, { Component } from "react";
import "../css/Clock.css";
//props: time{hours,minutes,seconds}
//set hours & period
class Clock extends Component {
  state = {
    time: this.props.time,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.time !== this.props.time) {
      this.setState({
        time: this.props.time
      });
    }
  }
  
  render() {
    return (
      <div className="clock">
        {this.state.time}
      </div>
    );
  }
}

export default Clock;
