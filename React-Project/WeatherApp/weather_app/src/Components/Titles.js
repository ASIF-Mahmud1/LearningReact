import React from "react";
//Initialize Component
class Titles extends React.Component{
  render(){
    return(
      <div>
       <h1  className="title-container__title">Weather Finder</h1>
       <h3 className="title-container__subtitle">Find out Temperature, Conditions and More...</h3>
      </div>
    );
  }
};

export default Titles;
