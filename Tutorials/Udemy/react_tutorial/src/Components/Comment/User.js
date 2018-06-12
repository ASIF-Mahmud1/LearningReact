import React from "react";
import Avatar from "./Avatar";
import Date from "./Date";

class User extends React.Component{

  render(){
    return(
    <div>
      <Avatar source= {this.props.user.avatarUrl} alternate= {this.props.user.name}/>
      <div>Name: {this.props.user.name}</div>
      <div>Comment: {this.props.user.text}</div>
      <Date date= {this.props.user.date} />


      </div>
    )
  }
}

export default User
