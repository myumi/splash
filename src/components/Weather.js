import React, { Component } from "react";
import axios from "axios";
//weather for day

class Weather extends Component {
  state = {
    temp: '',
    weather: '',
    humidity: '',
    city: "Stanhope",
    country: "US-AS",
    key: process.env.REACT_APP_OPENWEATHERAPI
  };
  componentWillMount() {
    this.weather();

    // setInterval(this.weather, 3000);
  }
  weather = () => {
    axios
      .get("https://api.openweathermap.org/data/2.5/forecast/daily", {
        params: {
          q: this.state.city + "," + this.state.country,
          cnt: 1,
          units: "imperial",
          APPID: this.state.key
        }
      })
      .then(response => {
        // handle success
        this.setState({
          temp: response.data.list[0].temp.day,
          weather: response.data.list[0].weather[0].icon,
          humidity: response.data.list[0].humidity
        });
      })
      .catch(function(error) {
        // handle error
        // aka console log bc idk lmao
        console.log(error);
      });
  };
  render() {
    if (this.state.temp) {
      return <div>{this.state.temp}</div>;
    }
    return <div>Loading...</div>;
  }
}

export default Weather;
