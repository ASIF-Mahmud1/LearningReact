import React from "react";

class Counter extends React.Component{

constructor(props){
  super(props)

   this.addOne= this.addOne.bind(this)
   this.minusOne= this.minusOne.bind(this)
   this.reset= this.reset.bind(this)
   this.state={
     count : 0
   }

}

 addOne(){
   this.setState((prevState)=>{
    return{
       count: prevState.count+1
    }
   })
   console.log(this.state.count,"addOne")
 }
 minusOne(){
   this.setState((prevState)=>{
     return{
       count: prevState.count-1
     }
   }
 )
   console.log(this.state.count,'minusOne')
 }
 reset(){
   this.setState((prevState)=>{
     return{
       count: 0
     }
   })
   console.log(this.state.count,'reset')
 }
  render(){
    return(
      <div>
        <h1>Counter: {this.state.count} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}





export default Counter;
