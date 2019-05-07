import React, { Component } from 'react';
import Player from '../components/player/Player';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Player />
      </div>
    );
  }
}

export default App;
