import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import ProgressBar from './ProgressBar.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
      current: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(change) {
    console.log(change.target.value);
    this.setState({ current: change.target.value });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className = "currentValue"> {this.state.current} </div>
        <div className="sliderContainer">
          <input id="slider" type="range" value={this.state.current} min={this.state.min} max={this.state.max} step="1" onChange={this.handleChange} />
        </div>
        <ProgressBar />
      </div>
    );
  }
}

export default App;
