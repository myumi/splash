import React, { Component } from "react";
//integrate facial recognition?

class Greeting extends Component {
  state = {
    name: "Myumi",
    message: "",
    timeOfDay: "",
    messages: {
      0: ["Good morning,"],
      1: ["Good afternoon,"],
      2: ["Good evening,"]
    }
  };

  componentDidMount() {
    this.setState({
      timeOfDay: this.props.timeOfDay,
      message: this.state.messages[this.props.timeOfDay][
        Math.floor(
          Math.random() * this.state.messages[this.props.timeOfDay].length
        )
      ]
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.timeOfDay !== this.props.timeOfDay) {
      this.setState({
        timeOfDay: this.props.timeOfDay,
        message: this.state.messages[
          this.state.timeOfDay[
            Math.floor(
              Math.random() * this.state.messages[this.state.timeOfDay].length
            )
          ]
        ]
      });
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
