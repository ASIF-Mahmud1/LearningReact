import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const introduce= "Welcome to React. Man I Have Changed It!!";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Introduce/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
class Introduce extends Component{
  render()
  {
    return(
      <h1 className="App-title">{introduce}</h1>
    );
  }
}

export default App;
