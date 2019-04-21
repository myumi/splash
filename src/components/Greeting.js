import React, { Component } from "react";
//integrate facial recognition?

class Greeting extends Component {
  state = {
    name: 'Myumi',
    message: '',
  }
  componentWillMount(){
    setInterval(this.greeting, 20000)
  }
  greeting = () => {
    var d = new Date();
    if(d.getHours >= 5 && d.getHours <= 12){
      const messages = ["Good morning,"]
      this.setState({})
    }
    else if(d.getHours >= 12 && d.getHours <= 18){
      const messages = ["Good afternoon,"]
      this.setState({})
    }
    else{
      const messages = ["Good evening,"]
      this.setState({})
    }
  }
  render() {
    return (
      <div>
        {this.state.message} {this.state.name}
      </div>
    );
  }
}

export default Greeting;
