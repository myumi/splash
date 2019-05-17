import React, { Component } from "react";
import axios from "axios";
import "../css/App.css";
import Clock from "./Clock.js";
import Day from "./Day.js";
import Greeting from "./Greeting.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

//change background for day, afternoon, night?
//rainy or not?
class App extends Component {
  state = {
    background: "",
    date: new Date(),
    day: new Date().getDay(),
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
    this.clock();
    this.weather();

    setInterval(this.clock, 1000);
    setInterval(this.daytime, 10000);
    setInterval(this.weather, 3600000);
  }
  //cleanup, make one call to setState
  //have am/pm?
  clock = () => {
    this.setState({
      date: new Date(),
      day: new Date().getDay(),
    });
    var d = this.state.date,
      hours = d.getHours();
      if (d.getHours() >= 5 && d.getHours() < 12) {
        //morning
        this.setState({ timeOfDay: 0 });
      } else if (d.getHours() >= 12 && d.getHours() <= 18) {
        //afternoon
        this.setState({ timeOfDay: 1 });
      } else {
        //evening
        this.setState({ timeOfDay: 2 });
      }
    if (hours > 12) hours -= 12;
    this.setState({
      time: {
        hours: hours.toString().length < 2 ? "0" + hours : hours,
        minutes:
          d.getMinutes().toString().length < 2
            ? "0" + d.getMinutes()
            : d.getMinutes(),
        seconds:
          d.getSeconds().toString().length < 2
            ? "0" + d.getSeconds()
            : d.getSeconds()
      }
    });
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
            return {
              temp: item.temp.day,
              icon: item.weather[0].icon,
              humidity: item.humidity
            };
          })
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
        <div className="app">
          <Clock
            time={this.state.time}
          />
          <Greeting timeOfDay={this.state.timeOfDay} />
          <Day date={this.state.date} />
          <Forecast
            weather={this.state.forecast}
            today={this.state.day}
          />
          <Weather today={this.state.forecast[0]} />
        </div>
      );
    }
    return (
      <div className="app">
        <Clock
          time={this.state.time}
        />
        <Greeting timeOfDay={this.state.timeOfDay} />
        <Day date={this.state.date} />
        Loading Weather...
      </div>
    );
  }
}

export default App;
