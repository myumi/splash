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
      <div className="forecast__item">
        <img className="item__icon" src={"img/path" + this.props.weather.icon} alt=""/>
        <span className="item__day">{days[this.props.day].toUpperCase()}</span>
      </div>
    );
  }
}

export default ForecastItem;
