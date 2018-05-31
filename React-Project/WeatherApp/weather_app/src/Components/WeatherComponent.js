import React from "react";
//Initialize Component
class WeatherComponent extends React.Component{
  render(){
    return(
      <div>
       {this.props.city && this.props.country &&
      <div>
      City : {this.props.city} <br/>
      Country: {this.props.country}<br/>
      Temperature : {this.props.temperature} <br/>
      Humidity : {this.props.humidity} <br/>
      Description : {this.props.description} <br/>
      </div>
    }
      {this.props.error}
      </div>
    );
  }
};
export default WeatherComponent;
