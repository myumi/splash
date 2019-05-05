import React, { Component } from "react";
//weather for day

class Weather extends Component {

  componentWillReceiveProps(){

  }
  
  render() {
    return (
      <div>
        <span>{JSON.stringify(this.props.weather.temp)}</span>
      </div>
    );
  }
}

export default Weather;
