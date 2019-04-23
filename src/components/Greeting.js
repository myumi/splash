import React, { Component } from "react";
//integrate facial recognition?

class Greeting extends Component {
  state = {
    name: 'Myumi',
    message: '',
  }
  componentWillMount(){
    this.greeting()
  }
  greeting = () => {
    if(!this.props.timeOfDay){
      const messages = ["Good morning,"]
      this.setState({message: messages[0]})
    }
    else if(this.props.timeOfDay === 1){
      const messages = ["Good afternoon,"]
      this.setState({message: messages[0]})
    }
    else{
      const messages = ["Good evening,"]
      this.setState({message: messages[0]})
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
