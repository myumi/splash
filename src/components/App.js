import React, { Component } from "react";
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
  };
  componentWillMount() {
    this.daytime();

    setInterval(this.daytime, 10000);
  };
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
  render() {
    return (
      <div>
        <Clock />
        <Greeting timeOfDay={this.state.timeOfDay} />
        <Day />
        <Forecast />
        <Weather />
      </div>
    );
  }
}

export default App;
