import React, { Component } from "react";
//weather for day

class Weather extends Component {
  componentWillMount() {
    this.weather();
    setInterval(this.weather, 100000);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Weather;
