import React from 'react';
import '../css/Day.css';
//props day of week string
class Day extends React.Component {
  state = {
    day: this.props.day,
  };

  componentDidUpdate(prevProps) {
    if(prevProps.day !== this.props.day){
      this.setState({
        day: this.props.day
      });
    }
  }

  render() {
    return (
      <div className='day'>
        <p>{this.state.day}</p>
        <p>Hello!</p>
      </div>
    );
  }
}

export default Day;
