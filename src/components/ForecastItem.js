import React, { Component } from "react";
import "../css/Forecast.css";
//props: key, day, weather
//set alt to descriptive text from weather obj
class ForecastItem extends Component {
  render() {
    const days = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat"
    };
    return (
      <div className="forecast-item">
        <img className="item-icon" src={"weather-icons/weathericons/" + this.props.weather.icon + ".svg"} alt="weather icon"/>
        <span className="item-day">{days[this.props.day].toUpperCase()}</span>
      </div>
    );
  }
}

export default ForecastItem;
