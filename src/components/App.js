import React, { Component } from "react";
import axios from "axios";
import "../css/App.css";
import Clock from "./Clock.js";
import Day from "./Day.js";
import Greeting from "./Greeting.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

//weather, todos
//change background for day, afternoon, night?
//rainy or not?
class App extends Component {
  state = {
    background: "",
    timeOfDay: "",
    weather: [],
    city: "Stanhope",
    country: "US-AS",
    key: process.env.REACT_APP_OPENWEATHERAPI
  };
  componentWillMount() {
    this.weather();
    this.daytime();

    setInterval(this.daytime, 10000);
    setInterval(this.weather, 3600000);
  }
  daytime = () => {
    var d = new Date();
    if (d.getHours() >= 5 && d.getHours() <= 12) {
      //morning
      this.setState({ timeOfDay: 0 });
    } else if (d.getHours() >= 12 && d.getHours() <= 18) {
      //afternoon
      this.setState({ timeOfDay: 1 });
    } else {
      //evening
      this.setState({ timeOfDay: 2 });
    }
  };
  weather = () => {
    axios
      .get("https://api.openweathermap.org/data/2.5/forecast/daily", {
        params: {
          q: this.state.city + "," + this.state.country,
          cnt: 5,
          units: "imperial",
          APPID: this.state.key
        }
      })
      .then((response) => {
        // handle success
        this.setState({ weather: response.data.list })
        console.log(this.state.weather)
      })
      .catch(function(error) {
        // handle error
        // aka console log bc idk lmao
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Clock />
        <Greeting timeOfDay={this.state.timeOfDay} />
        <Day />
        <Forecast weather={this.state.weather[0]}/>
        <Weather weather={this.state.weather}/>
      </div>
    );
  }
}

export default App;
