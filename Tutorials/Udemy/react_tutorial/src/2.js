import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Template1 from "./Components/2/Template1"
import Template2 from "./Components/2/Template2"
// Task-1 : Render the subtitle (and p tag if the sub-title exists)
// Task-2 : Render another p tag if option.length>0 that says "Here are your options" else "No options"

// User Object
const user1={
  name : "Stranger",
  age: 26,
  location: "Congo"
}
// It is used to check what happens when location is not defined in Template2
const user2={
  name : "Asif",
  age: 23,
  location: undefined
}
// It is used to check what happens when location is not given in Template2
const user3={
  name : "I Dont know",
  age: "1000 BC"
}

// It is used to check what happens when name  is not given in Template2
const user4={
  name : undefined,
  age: 23,
  location: "Liberty City"
}

// It is used to check what happens when age is below 10 in Template2
const user5={
  name : "Tawheed",
  age: 5,
  location: "Lego Land"
}

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
  title : "My Title",
  subtitle : "This is my Sub-Title",
  option : []

}

// It is used to check to Check Both task above
const app4= {
  title : "My Title",
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

}
// Main Class that renders the Web Application
class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
        </header>
        <header>
          <Template2 user= {user5} getLocation= {getLocation(user5.location)} />
          <Template1 app= {app4}/>
        </header>
      </div>
    );
  }
}

export default App;
