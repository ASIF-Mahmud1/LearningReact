// Importing React from react, which is a node module
import React from "react";
//Import Title Component from "Components Folder"
//Now You Can use Titles Component within the <div>
import Titles from "./Components/Titles";
//Import Form Component from "Components Folder"
//Now You Can use Form Component within the <div>
import Form from "./Components/Form";
//Import Form Component from "Components Folder"
//Now You Can use Form Component within the <div>
import WeatherComponent from "./Components/WeatherComponent";
//Store API key to get access to Weather Info
const API_KEY= "5861748ed78df9b9f8cb36bf60f270a5";
//Initialize Component

//getWeather is to request API call
//const data- It converts the data from "api_call" to JSON data
//Send the "getWeather" to the "Form" Component so that it gets triggered when onSubmit is triggered
class App extends React.Component{
  getWeather= async(e)=>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;

    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();



    console.log(data);
  }
  render(){
    return(
      <div>
         <Titles />
         <Form getweather= {this.getWeather} />
         <WeatherComponent />
      </div>
    );
  }
};

export default App;
