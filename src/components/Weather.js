import React, { Component } from "react";
import "../css/Weather.css";
//weather for day
//props: today{temp, icon, humidity}
//set alt to descriptive text from weather obj
class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <img
          className="weather-icon"
          src={"img/path" + this.props.today.icon}
          alt="weather icon"
        />
        <div className="weather-text">
          <span className="weather-temp">{this.props.today.temp}°F</span>
          <span className="weather-humidity">{this.props.today.humidity}%</span>
        </div>
      </div>
    );
  }
}

export default Weather;
