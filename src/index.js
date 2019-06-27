import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import MainComponent from './Main';
import {Test} from './components/Test';

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
			<Test/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
