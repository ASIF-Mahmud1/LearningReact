import React from "react";

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.afterButtonClicked= this.afterButtonClicked.bind(this)
    this.state = {app: {
      title : "My Title",
      subtitle : "Sub-Title",
      option : []

    }};
  }


  afterButtonClicked= (event)=>{
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
      this.state.app.option.push(input_field)

      console.log("Now Your Array Looks Like : ")
      this.state.app.option.forEach((print)=>{
        console.log(print)
      })

    }
      event.target.elements.wrote.value="";

  }

  render(){
    return(
       <div>I am a Cow</div>
    )
  }
}



export default Form
