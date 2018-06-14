import React, { Component } from 'react';
class IndecisionApp extends React.Component{
  render(){
    const mytitle= "IndecisionApp"
    const mysubtitle= "Put Your Life in the hands of a Computer"
    const options=["one", "two", "three"]
    return(
      <div>
       <Header title={mytitle} subtitle={mysubtitle}/>
       <Action />
       <Options options={options}/>
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
  handlePick(){
    let relation= "Dawg"
    alert(`Yao, You Clicked Me ${relation} !!..`)
  }
  render(){
    return(
      <div>
         <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component{
  constructor(props){
    super(props)
    this.handleRemoveAll= this.handleRemoveAll.bind(this)

  }
  handleRemoveAll(){
    let message= "Remove All Button Clicked"
  //  alert(`${message} !`)
  console.log(this.props.options)
  }
  render(){
    return(
        <div>
          <button onClick={this.handleRemoveAll}>Remove All</button>
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
