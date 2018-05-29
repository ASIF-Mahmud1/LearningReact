import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//I haven't used var "introduce" in this code
const introduce= "Welcome to React. Man I Have Changed It!!";
  // We have passed data from Parent to Child
  // Don't use () when you use function in the button or anywhere. Reason??  See LevelUp Tuts #5 State, Inline
class App extends Component {
  state= {
    toggle : true
  }
  doToggling =() =>{
    this.setState(
    {  toggle : ! this.state.toggle }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Introduce text="Welcome to React. Man I Have Changed It using 'props'!!"
                     text2="This is Just Another Line"
                     toggle= {this.state.toggle}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.toggle &&
          <p>This will Show and Hide</p>
        }

        <button onClick={this.doToggling} >Show/Hide</button>
      </div>
    );
  }
}
class Introduce extends Component{
  render()
  {
    const {text, text2, toggle}= this.props;
      console.log(toggle);
    return(
      <div>
      <h1 className="App-title">{text}</h1>
      <h1 className="App-title">{text2}</h1>
  
      </div>
    );
  }
}

export default App;
