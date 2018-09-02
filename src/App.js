import React, { Component } from 'react';

import './styles.css';

import Form from './components/Form/Form';
import Title from './components/Title/Title';
import Result from './components/Result/Result';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      description: undefined,
      temp: undefined,
      humidity: undefined,
      wind: undefined,
      error: undefined,
      title: undefined
    };
  }
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        error: undefined,
        title: 'Results'
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        temp: undefined,
        humidity: undefined,
        wind: undefined,
        error: 'Please enter your city and country name',
        title: ''
      });
    }
  };
  render() {
    return (
      <div className="appContainer">
        <div className="innerContainer">
          <Title />
          <Form getWeather={this.getWeather} />
          <Result
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            temp={this.state.temp}
            humidity={this.state.humidity}
            wind={this.state.wind}
            error={this.state.error}
            title={this.state.title}
          />
        </div>
      </div>
    );
  }
}

export default App;
