import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import MainComponent from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
	      <Hello name={this.state.name} />
         <MainComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
