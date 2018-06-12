import React from "react";

class Date extends React.Component{

  render(){
    return(
      <div>Date: {this.props.date.toLocaleDateString()}</div>
    )
  }

}

export default Date;
