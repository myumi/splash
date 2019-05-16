import React, { Component } from "react";
//weather for day

class Weather extends Component {
  render() {
    return(
      <div>
      {this.props.today.temp}° {this.props.today.icon} {this.props.today.humidity}%
      </div>
    );
  };
}

export default Weather;
