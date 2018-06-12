import React from "react";

class Avatar extends React.Component{

  render(){
    return(
    <div>
    <img
      src={this.props.source}
       alt={this.props.alternate}
    />
      </div>
    )
  }
}

export default Avatar
