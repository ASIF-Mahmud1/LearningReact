import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Counter from "./Components/3/Counter"
 /*
// App obkect
const app= {
  title : "My Title",
  subtitle : "Sub-Title",
  option : ['One', 'Two', 'Three']

}
// It is used to check if subtitle exists
const app2= {
  title : "My Title",
  subtitle : undefined,
  option : ['One', 'Two', 'Three']

}
// It is used to check if option.length>0
const app3= {
  title : "Indecison App",
  subtitle : "Put your life in the hand of Computer",
  option : []

}

// It is used to check to Check Both task above
const app4= {
  title : "Indecison App",
  subtitle : undefined,
  option : []
}

// This Function Checks If an user location exists or not
function getLocation(location){
  if(location){
    return location
  }
  else {
    return undefined
  }

}*/
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
