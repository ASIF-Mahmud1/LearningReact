import React from "react";
//Initialize Component
class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.getweather}>
        <input type="text" name="city" placeholder ="CITY..." />
        <input type="text" name="country" placeholder ="COUNTRY..." />
        <button>Get Weather</button>
      </form>
    );
  }
};
export default Form;
