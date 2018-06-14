import React, { Component } from 'react';
class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions= this.handleDeleteOptions.bind(this)
    this.handlePick= this.handlePick.bind(this)
    this.state={
      options:["one", "two", "three"]
    }
  }
  handleDeleteOptions(){
    this.setState((prevState)=>{
    return{
      options: []
    }
    })
  }
  handlePick(){
    const randomNum= Math.floor(Math.random()*this.state.options.length)
    const opt= this.state.options[randomNum]
    alert(`${opt}`)
  }
  render(){
    const mytitle= "IndecisionApp"
    const mysubtitle= "Put Your Life in the hands of a Computer"

    return(
      <div>
       <Header title={mytitle} subtitle={mysubtitle}/>
       <Action hasOptions= {this.state.options.length>0}
        handlePick= {this.handlePick}
       />
       <Options options={this.state.options}
        handleDeleteOptions= {this.handleDeleteOptions}
       />
       <AddOption />
      </div>
    )
  }
}
class Header extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
         <h1>{this.props.title}</h1>
         <h2>{this.props.subtitle}</h2>
      </div>
    )
  }

}

class Action extends React.Component{

  render(){
    return(
      <div>
         <button onClick={this.props.handlePick}
         disabled={! this.props.hasOptions}
         >What Should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component{

  render(){
    return(
        <div>
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
         {
          this.props.options.map((print)=>{
            return (<Option key={print} optionText={print} /> )
          })
         }
        </div>

    )
  }
}
class Option extends React.Component{
  render(){
    return(
      <div>
         {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component{
    handleAddOption(event){
    event.preventDefault();
    let input_field= event.target.elements.wrote.value.trim()
    if(input_field){
      alert(`${input_field} !!`)
    }
    event.target.elements.wrote.value=''

  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleAddOption}>

         <input type="text" name="wrote"/>
         <button>Add Option</button>

      </form>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
         <IndecisionApp />
      </div>
    );
  }
}

export default App;
