import React, {Component} from "react"

class VisibilityToggle extends React.Component{
  constructor(props){
    super(props)
    this.toggleVisibility= this.toggleVisibility.bind(this)
    this.state={
      visibility: false
    }
  }

  toggleVisibility(){
    this.setState((prevState)=>{
      return{
        visibility : ! prevState.visibility
      }
    })
  //  console.log(`Show-Hide Clicked ! Visibility : ${this.state.visibility}`)
  }
  render(){
    return(
      <div>
         <h1>VisibilityToggle</h1>
         <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
         {this.state.visibility && (
           <div>
             <p>These are the Details !!</p>
           </div>
         )}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <VisibilityToggle/>
      </div>
    );
  }
}

export default App;
