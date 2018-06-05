import React from "react";

// Task-1 : Render the subtitle (and p tag if the sub-title exists)
// Task-2 : Render another p tag if option.length>0 that says "Here are your options" else "No options"


// 3rd Approach for Task-1 ,2
class Template1 extends React.Component{
  render(){
    return(
      <div>
       <h1>{this.props.app.title}</h1>
       {this.props.app.subtitle &&
        <p>{this.props.app.subtitle}</p>
       }
       <p>{this.props.app.option.length>0 ? "Here are your options" :"No options"}</p>
       <ol>
         <li>Item One</li>
         <li>Item two</li>
       </ol>

      </div>
    )
  }
}
export default Template1;
/* */
/*
// 1st Approach for Task-1
class Template1 extends React.Component{
  render(){
    return(
      <div>
       <h1>{this.props.app.title}</h1>
       {this.props.app.subtitle &&
        <p>{this.props.app.subtitle}</p>
       }
       <ol>
         <li>Item One</li>
         <li>Item two</li>
       </ol>

      </div>
    )
  }
}
*/

/*
// 2nd Approach for Task-2
class Template1 extends React.Component{
  render(){
    return(
      <div>
       <h1>{this.props.app.title}</h1>
       <p>{this.props.app.subtitle}</p>
       <p>{this.props.app.option.length>0 ? "Here are your options" : "No options"}</p>

       <ol>
         <li>Item One</li>
         <li>Item two</li>
       </ol>

      </div>
    )
  }
}
*/
