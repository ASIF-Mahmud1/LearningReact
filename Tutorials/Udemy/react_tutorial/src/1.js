import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduce from "./Components/1/Introduce";
import Template1 from "./Components/1/Template1"
import Template2 from "./Components/1/Template2"
const user={
  name : "Stranger",
  age: 26,
  location: "Congo"
}
const introduce ="Hi Bye";

// App obkect
const app= {
  title : "My Title",
  subtitle : "Sub-Title",

}



class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">

        </header>
        <header>
          <Introduce introduce= {introduce}/>
          <Template2 user= {user} />
          <Template1 app= {app}/>
        </header>
      </div>
    );
  }
}

export default App;
