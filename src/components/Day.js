import React, { Component } from "react";
import "../css/Day.css";
//props day of week string
class Day extends Component {
  state = {
    day: this.props.day,
  };

  componentDidUpdate(prevProps) {
    if(prevProps.day !== this.props.day){
      this.setState({
        day: this.props.day
      });
    }
  }

  render() {
    return (
      <div className="day">
        {this.state.day}
      </div>
    );
  }
}

export default Day;
