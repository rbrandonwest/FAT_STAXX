import React, { Component } from 'react';
import NavBar from './NavBar';
import Pyramid from './Pyramid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="three column row">
        <Pyramid />
        </div>
      </div>
    );
  }
}

export default App;
