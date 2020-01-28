import React from 'react';
import '../css/Clock.css';
//props: time string
class Clock extends React.Component {
  state = {
    time: this.props.time,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.time !== this.props.time) {
      this.setState({
        time: this.padTime(this.props.time)
        // time: this.props.time
      });
    }
  }

  //toLocaleString zero padding is broken for time!!!!! since 2015!!!!!! AHHHHH
  padTime = (time) => {
    let padding = time.split(':')
    padding.forEach((item, index) => {
      if(item.length === 1){
        padding[index] = '0' + item
      }
    })
    return padding.join(':')
  }

  render() {
    return (
      <div className='clock'>
        {this.state.time}
      </div>
    );
  }
}

export default Clock;
