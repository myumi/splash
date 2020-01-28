import React from 'react';
import axios from 'axios'
import '../css/App.css';
import Clock from './Clock';
import Day from './Day';
// import Greeting from './Greeting.js';
import Weather from './Weather';
import Forecast from './Forecast';

//change background for day, afternoon, night?
//rainy or not?
class App extends React.Component {
  state = {
    date: new Date(),
    day: '',
    time: '',
    forecast: [
      { temp: '', weather: '', humidity: '' },
      { temp: '', weather: '', humidity: '' },
      { temp: '', weather: '', humidity: '' },
      { temp: '', weather: '', humidity: '' },
      { temp: '', weather: '', humidity: '' }
    ],
    city: '07874',
    country: 'US',
    key: process.env.REACT_APP_OPENWEATHERAPI
  };

  componentDidMount() {
    this.clock();
    this.weather();

    setInterval(this.clock, 1000);
    setInterval(this.weather, 3600000);
  }

  clock = () => {
    const d = new Date();
    this.setState({
      date: d,
      day: d.toLocaleString('default', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      time: d.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    });
  };

  weather = () => {
    axios.get('https://api.openweathermap.org/data/2.5/forecast/daily', {
        params: {
          zip: this.state.city + ',' + this.state.country,
          cnt: 6,
          units: 'imperial',
          APPID: this.state.key
        }
      })
      .then(res => {
        this.setState({
          forecast: res.data.list.map(item => {
            return {
              temp: item.temp.day,
              icon: item.weather[0].icon,
              humidity: item.humidity
            };
          })
        });
      })
      .catch(err=> {
        throw new Error(err, 'Cannot retrieve data from OpenWeatherMap');
      });
  };

  render() {
    if (this.state.forecast[0].temp) {
      return (
        <div className='app'>
          <Day day={this.state.day} />
          <Weather today={this.state.forecast[0]} />
          <Clock time={this.state.time} />
          <Forecast weather={this.state.forecast} today={this.state.date} />
        </div>
      );
    }
    return (
      <div className='app'>
        <Day date={this.state.date} />
        <Clock time={this.state.time} />
        Loading Weather...
      </div>
    );
  }
}

export default App;
