import React,{Component} from 'react'
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOne= this.handleAddOne.bind(this)
    this.handleMinusOne= this.handleMinusOne.bind(this)
    this.handleReset= this.handleReset.bind(this)
    this.state={
      count :0
    }
  }

  handleAddOne(){
    console.log(`+1 Clicked`)
    // Most  Important Line:
    this.setState((prevState)=>{
      return{
        count: prevState.count+1
      }
    })
    console.log(this.state.count)
  }

  handleMinusOne(){
    this.setState((prevState)=>{
     return{
       count: prevState.count-1
     }
    })
    console.log(`-1 Clicked`)
  }

  handleReset(){
    this.setState((prevState)=>{
      return{
        count: 0
      }
    })
    console.log(`Reset Clicked`)
  }
  render(){
    return(
      <div>
         <h1>Count : {this.state.count}</h1>
         <button onClick={this.handleAddOne}>+1</button>
         <button onClick={this.handleMinusOne}>-1</button>
         <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
