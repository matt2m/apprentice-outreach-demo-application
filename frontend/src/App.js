import React, { Component } from 'react';

import './App.css';
import Greeting from './components/Greeting';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Greeting />
        </header>
      </div>
    );
  }
}
