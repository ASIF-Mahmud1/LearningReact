import React from "react";



class Template4 extends React.Component{

  constructor(props){
    super(props)
    this.handleAddOne= this.handleAddOne.bind(this)
    this.handleminusOne= this.handleminusOne.bind(this)
    this.handleReset= this.handleReset.bind(this)
    this.state={
      count: 0
    }
  }
  handleAddOne(){
  this.setState((prevState) => {
    return{
      count : 1+ prevState.count
    }
  })
    console.log(this.state.count,"handleAddOne")
  }
  handleminusOne(){
    this.setState((prevState)=>{
      return {
        count : prevState.count -1
      }
    })
    console.log(this.state.count,"handleminusOne")
  }
  handleReset(){
    this.setState(()=>{
    return{
        count: 0
    }
    })
    console.log(this.state.count,"handleReset")
  }

  render(){
    return(
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick= {this.handleAddOne}>+1</button>
        <button onClick={this.handleminusOne} >-1</button>
        <button onClick={this.handleReset} >Reset</button>
      </div>
    )
  }
}









export default Template4;
