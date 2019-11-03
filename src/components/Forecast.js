import React, { Component } from "react";
import ForecastItem from "./ForecastItem.js";
import "../css/Forecast.css";
//5 day forecast
//put state update logic into its own function?
class Forecast extends Component {
  state = {
    data: [{
      day: '',
      weather: ''
    }]
  };

  // constructor(props) {
  //   super(props);
  //   // Don't call this.setState() here!
  //   // this.setData(this.props.today.getDay(), this.props.weather)
  //   state = {
  //
  //   }
  // }

  componentWillMount() {
    this.setData(this.props.today.getDay(), this.props.weather)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weather !== this.props.weather) {
      this.setData(this.props.today.getDay(), this.props.weather)
    }
  }

  setData = (day, forecast) => {
    //finds all the days following the current one
    let date = [],
      today = day;
    for (let i = 1; i <= 5; i++) {
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
