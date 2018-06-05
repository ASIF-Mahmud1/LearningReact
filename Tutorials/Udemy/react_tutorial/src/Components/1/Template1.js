import React from "react";
class Template1 extends React.Component{
  render(){
    return(
      <div>
       <h1>{this.props.app.title}</h1>
       <p>{this.props.app.subtitle}</p>
       <ol>
         <li>Item One</li>
         <li>Item two</li>
       </ol>

      </div>
    )
  }
}
export default Template1;
