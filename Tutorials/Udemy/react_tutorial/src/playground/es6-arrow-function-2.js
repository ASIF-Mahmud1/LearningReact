import React, { Component } from 'react';
//import logo from '../logo.svg';
//import '../App.css';

console.log("Arrow Function-2.......")

// arguments object- no longer bound with arrow function
const add= (a,s)=>{
// " console.log(arguments) " It doesn't work in Arrow Function unlike in es-5 function
  return a+s
}

console.log("Sum is ",add(2,4))

// this keyword - no longer bound to arrow function
const user= {
  name : "Asif",
  cities: ["Dhaka", "Sylhet", "Detroit"],
  printPlacesLived : function(){
  console.log(this.name)
  console.log(this.cities)

//////////// Looping through array cities
  console.log("Looping through array cities")
  // forEach takes an anonymys function as an argument. the function itself elements within the array as an argument, as it loops through

  this.cities.forEach((city)=>{
    console.log(this.name, " has lived in ", city)
  })

// Map function works similar to forEach. It has the same syntax like forEach
// forEach function allows to "do" something with the array elements Ex: Print it to console
//map() function allows us to transorm the array elements

const cityMessage= this.cities.map((city)=>{
  return this.name+" has lived in "+city  /// Here city will be returned by map() which will be stored in cityMessage
})
/////Printing out from map() function
console.log("Printing out from map() function")
console.log(cityMessage)


/* */
/*
//////////// Looping through array cities
  console.log("Looping through array cities")
  user.cities.forEach((city)=>{
  console.log(user.name," has Lived in ", city)
  })
*/

  }

}

user.printPlacesLived()

////// Challenge Taks
console.log("Challenge Taks..................")

const multiplier ={
  numbers: [1,2,3,4,5,6,7],
  multiplyBy:2,

  multiply(){
    const result= this.numbers.map((numbers)=>{
      return numbers* this.multiplyBy
    })
    return result
  }
  //Alternative and more precise  multiply() Function
  /*
  multiply(){
    return this.numbers.map((number)=> number*this.multiplyBy)
  }

  */

}

console.log(multiplier.multiply())

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
        </header>
        <header>

        </header>
      </div>
    );
  }
}

export default App;
