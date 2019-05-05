import React, { Component } from "react";
import ForecastItem from './ForecastItem.js'
//5 day forecast

class Forecast extends Component {
  render() {
    return (
      <div>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </div>
    );
  }
}

export default Forecast;
