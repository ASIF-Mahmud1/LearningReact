import React, { Component } from 'react';
//import logo from '../logo.svg';
//import '../App.css';



console.log("Arrow Function")

let a=4;
// es-5 function
const square= function(x){
  return (x*x)
}

console.log('Square of',a," is ", square(a));

//es-6 arrow function
//starts with arguments
//they are anonamys Function
const squareArrow= (x)=>{
  return (x*x)
}

console.log('Square of',a," (arrow function used) is ", squareArrow(a));

//Arrow function expression syntax/ shorthand syntax
const Squarearrow= (x)=> x*x
console.log('Square of',a," (arrow function expression syntax used) is ", Squarearrow(a));

/* */
////////// Challenge For Today starts below
console.log("Todays Challenge..........................")

// Arrow function that takes full name and output first name
const firstNameFunction= (fullname)=>{
  return fullname.split(' ')[0]
}

// Arrow Function Expression syntax
const firstNameShortHandFunction= (fullname) => fullname.split(' ')[0]


const fullName= "Asif Mahmud"
console.log("Full Name : ",fullName," First Name : ",firstNameFunction(fullName))

console.log("Full Name : ",fullName," First Name : ",firstNameShortHandFunction(fullName), "(Using shorthand Arrow function) ")

// Main Class that renders the Web Application
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
