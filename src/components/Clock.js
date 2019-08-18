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
        time: this.padTime(this.props.time)
      });
    }
  }

  //toLocaleString zero padding is broken for time!!!!! since 2015!!!!!! AHHHHH
  padTime = (time) => {
    let padding = time.split(":")
    padding.forEach((item) => {
      if(item.length === 1){
        return "0" + item
      }
      return item
    })
    return padding.join(":")
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
