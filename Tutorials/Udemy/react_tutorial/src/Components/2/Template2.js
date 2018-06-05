import React from "react";

// 4th Approach and operator "&&"- what happens when user name is below 10 we don't want to show it out....
class Template2 extends React.Component{
  render(){
    return(
      <div>
      <p>Name : {this.props.user.name ? this.props.user.name : "Anonymus" } </p>
      {(this.props.user.age && this.props.user.age>10) &&
        <p>Age : {this.props.user.age} </p>}

      { this.props.getLocation &&
        <p>Location : {this.props.getLocation} </p>
      }

      </div>
    );
  }
}
export default Template2

 /* */
// 1st Approach --Print out user name, age, location
/*
class Template2 extends React.Component{
  render(){
    return(
      <div>
      <p>Name : {this.props.user.name} </p>
      <p>Age : {this.props.user.age} </p>
      <p>Location : {this.props.getLocation} </p>

      </div>
    );
  }
}
*/


/*
// 2nd Approach- what happens when user location is not given....
class Template2 extends React.Component{
  render(){
    return(
      <div>
      <p>Name : {this.props.user.name} </p>
      <p>Age : {this.props.user.age} </p>

      { this.props.getLocation &&
        <p>Location : {this.props.getLocation} </p>
      }

      </div>
    );
  }
}
*/
 /*
 // 3rd Approach ternary operator- what happens when user name is not given....
 class Template2 extends React.Component{
   render(){
     return(
       <div>
       <p>Name : {this.props.user.name ? this.props.user.name : "Anonymus" } </p>
       <p>Age : {this.props.user.age} </p>

       { this.props.getLocation &&
         <p>Location : {this.props.getLocation} </p>
       }

       </div>
     );
   }
 }
  */
  
