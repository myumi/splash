import React, { Component } from "react";
import ForecastItem from "./ForecastItem.js";
//5 day forecast
//put state update logic into its own function?
class Forecast extends Component {
  state = {
    data: {}
  };
  componentWillMount() {
    var date = [],
      today = this.props.today;
    for (var i = 1; i <= 5; i++) {
      date[i] = today + i > 6 ? today + i - 7 : today + i;
    }
    this.setState({
      data: date.map((item, i) => {
        return {
          date: date[i],
          weather: this.props.weather[i]
        };
      })
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.weather !== this.props.weather) {
      var date = [],
        today = this.props.today;
      for (var i = 1; i <= 5; i++) {
        date[i] = today + i > 6 ? today + i - 7 : today + i;
      }
      this.setState({
        data: date.map((item, i) => {
          return {
            date: date[i],
            weather: this.props.weather[i]
          };
        })
      });
    }
  }
  render() {
    //ignore first day?
    return (
      <div className="forecast">
        {this.state.data.map((item, i) => <ForecastItem key={i} day={item.date} weather={item.weather}/>)}
      </div>
    )
  }
}

export default Forecast;
