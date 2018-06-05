import React from "react";
class Template2 extends React.Component{
  render(){
    return(
      <div>
      <p>Name : {this.props.user.name} </p>
      <p>Age : {this.props.user.age} </p>
      <p>Location : {this.props.user.location} </p>

      </div>
    );
  }
}
export default Template2
