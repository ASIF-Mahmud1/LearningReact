import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Template1 from "./Components/4-Form-Element/Template1"
import Form from "./Components/4-Form-Element/Form"


// App obkect
const app= {
  title : "My Title",
  subtitle : "Sub-Title",
  option : []

}
// It is used to check if subtitle exists
const app2= {
  title : "My Title",
  subtitle : undefined,
  option : ['One', 'Two', 'Three']

}
// It is used to check if option.length>0
const app3= {
  title : "Indecison App",
  subtitle : "Put your life in the hand of Computer",
  option : []

}

// It is used to check to Check Both task above
const app4= {
  title : "Indecison App",
  subtitle : undefined,
  option : []
}

/* this arrow function is going to be called  with an event object -"event". You can tell it anything!! */
/* It contains various info about the event */
const afterButtonClicked= (event)=>{
  event.preventDefault()    /* This prvent the page from refreshing */
  const input_field= event.target.elements.wrote.value;  /* What this line even mean? In simple words :
                                                          event.target is the response to the element that triggered the events
                                                          which in this case is "Form" element
                                                          event.target.elements : gives us access to all the elements inside our form-
                                                          in this case "option". And elements are indexed by attribute "name"
                                                          so we can fetch data from "name" attribute
                                                          So this is the story in nut-shell
                                                         */

  console.log("Add Option was Clicked. This is what you wrote : ", input_field)
  if(input_field){
    app.option.push(input_field)

    console.log("Now Your Array Looks Like : ")
    app.option.forEach((print)=>{
      console.log(print)
    })

  }
    event.target.elements.wrote.value="";

}


// Main Class that renders the Web Application
class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
        </header>
        <header>
          <Template1 app= {app}/>
        </header>

        {/* see react handle events form element to see why You used onSubmit */}
        <form onSubmit= {afterButtonClicked}>
          <input type="text" name= "wrote"/>

          <button>Add Option</button>
        </form>
        <Form />
      </div>
    );
  }
}

export default App;
