import React, { Component } from "react";
//weather for day

class Weather extends Component {
  state = {
    temp: this.props.today.temp,
    weather: this.props.today.icon,
    humidity: this.props.today.humidity,
  };
  render() {
    return(
      <div>
      {this.props.today.temp}-
      {this.props.today.weather}-
      {this.props.today.humidity}%
      </div>
    );
  };
}

export default Weather;
