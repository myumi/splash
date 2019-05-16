import React, { Component } from "react";
//props: key, day, weather
class ForecastItem extends Component {
  render() {
    return (
      <div>
        {this.props.day} {this.props.weather.icon}
      </div>
    );
  }
}

export default ForecastItem;
