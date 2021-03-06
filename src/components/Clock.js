import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div>It is {this.state.date.toLocaleTimeString()}.</div>
      </div>
    );
  }
}