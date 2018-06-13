import React, { Component } from 'react';

class Header extends React.Component{
  render(){
    return(
      <div>
         <h1>Indecision</h1>
         <h2>Put Your Life in the hands of a Computer</h2>
      </div>
    )
  }

}

class Action extends React.Component{
  render(){
    return(
      <div>
         <button>What Should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
      Option Components Here
      </div>
    )
  }
}

class AddOption extends React.Component{
  render(){
    return(
      <div>
      Add Component Here
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Action />
          <Options />
          <AddOption />
      </div>
    );
  }
}

export default App;
