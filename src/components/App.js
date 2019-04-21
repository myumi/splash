import React, { Component } from "react";
import "../css/App.css";
import Clock from "./Clock.js";
import Day from "./Day.js";
import Greeting from "./Greeting.js"

//weather, todos
//change background for day, afternoon, night?
//rainy or not?
class App extends Component {
  state = {
    background: '',
    timeOfDay: '',
  }

  componentWillMount(){
    var d = new Date();
    if(d.getHours >= 5 && d.getHours <= 12){
      //morning
      this.setState({timeOfDay: 0})
    }
    else if(d.getHours >= 12 && d.getHours <= 18){
      //afternoon
      this.setState({timeOfDay: 1})
    }
    else{
      //evening
      this.setState({timeOfDay: 2})
    }
  }

  render() {
    return (
      <div>
        We in here.
        <Clock />
        <Day />
        <Greeting timeOfDay={this.state.timeOfDay}/>
      </div>
    );
  }
}

export default App;
