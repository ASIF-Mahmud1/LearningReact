import React from "react";
//Initialize Component
class WeatherComponent extends React.Component{
  render(){
    return(
      <div className="weather__info">
       {this.props.city && this.props.country &&
      <div className="weather__key">
      City : {this.props.city} <br/>
      Country: {this.props.country}<br/>
      Temperature : {this.props.temperature} <br/>
      Humidity : {this.props.humidity} <br/>
      Description : {this.props.description} <br/>
      </div>
    }
      <div className="weather__error">{this.props.error} </div>
      </div>
    );
  }
};
export default WeatherComponent;
