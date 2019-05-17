import React, { Component } from "react";
import "../css/Forecast.css";
//props: key, day, weather
//set alt to descriptive text from weather obj
class ForecastItem extends Component {
  render() {
    return (
      <div className="forecast__item">
        <img className="item__icon" src={"img/path" + this.props.weather.icon} alt=""/>
        <span className="item__day">{this.props.day}</span>
      </div>
    );
  }
}

export default ForecastItem;
