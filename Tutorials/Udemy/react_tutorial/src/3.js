import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Counter from "./Components/3/Counter"
 
// Main Class that renders the Web Application
class App extends Component {
   count=9
  render() {
    return (
      <div className="">
        <header className="">
        </header>
        <header>
          <Counter />
        </header>

      </div>

    );
  }
}
export default App;
