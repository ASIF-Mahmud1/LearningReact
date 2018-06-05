import React from "react";
class Introduce extends React.Component{
  render()
  {
    return(
      <h1 className="App-title">{this.props.introduce}</h1>
    );
  }
}
export default Introduce;
