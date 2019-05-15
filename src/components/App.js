import React, { Component } from "react";
import axios from "axios";
import "../css/App.css";
import Clock from "./Clock.js";
import Day from "./Day.js";
import Greeting from "./Greeting.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

//weather, todos
//should probably have time processing done here
//change background for day, afternoon, night?
//rainy or not?
class App extends Component {
  state = {
    background: "",
    timeOfDay: "",
    weatherIn: false,
    forecast: [
      { temp: "", weather: "", humidity: "" },
      { temp: "", weather: "", humidity: "" },
      { temp: "", weather: "", humidity: "" },
      { temp: "", weather: "", humidity: "" },
      { temp: "", weather: "", humidity: "" }
    ],
    city: "07874",
    country: "US",
    key: process.env.REACT_APP_OPENWEATHERAPI
  };
  componentWillMount() {
    this.daytime();
    this.weather();

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
          zip: this.state.city + "," + this.state.country,
          cnt: 6,
          units: "imperial",
          APPID: this.state.key
        }
      })
      .then(response => {
        // handle success
        this.setState({
          weatherIn: true,
          forecast: response.data.list.map(item => {
            return {temp: item.temp.day,
            weather: item.weather[0].icon,
            humidity: item.humidity};
          }
        )
        });
      })
      .catch(function(error) {
        // handle error
        // aka console log bc idk lmao
        console.log(error);
      });
  };
  render() {
    if (this.state.weatherIn) {
      return (
        <div>
          <Clock />
          <Greeting timeOfDay={this.state.timeOfDay} />
          <Day />
          <Forecast fiveDay={this.state.forecast}/>
          <Weather today={this.state.forecast[0]}/>
        </div>
      );
    }
    return (
      <div>
        <Clock />
        <Greeting timeOfDay={this.state.timeOfDay} />
        <Day />
        Loading Weather...
      </div>
    );
  }
}

export default App;
