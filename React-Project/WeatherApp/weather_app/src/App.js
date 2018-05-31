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
//Send the "getWeather" to the "Form" Component so that it gets triggered when onSubmit is called
// Question : How do the getWeather functions this will be called on Form component (city, country), and not in any other component
class App extends React.Component{
  // defining state
  state= {
    city: undefined,
    country: undefined,
    humidity:undefined,
    description:undefined,
    temperature: undefined,
    error:undefined
  }

  getWeather= async(e)=>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;

    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city && country)
    {
      this.setState({
        city: data.name,
        country: data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        temperature: data.main.temp,
        error:""
      });
      console.log(data);
    }
    else
    {
      this.setState({
        city: undefined,
        country: undefined,
        humidity:undefined,
        description:undefined,
        temperature: undefined,
        error:"Please Enter Correct City and Country "

      });
    }


  }
  render(){
    return(
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
              <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getweather= {this.getWeather} />
                <WeatherComponent
                  city= {this.state.city}
                  country= {this.state.country}
                  humidity= {this.state.humidity}
                  description= {this.state.description}
                  temperature= {this.state.temperature}
                  error= {this.state.error}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    );
  }
};

export default App;
