import React, { Component } from 'react';
//import logo from '../logo.svg';
//import '../App.css';
// Declaring your variable as var is a bad practice!!
var nameVar= "Asif";
// var  with same name can be declared mu;ltiple times
// when we use var  duplicate declartion does not throws error. Problem !!
var nameVar= "Mahmud"
console.log('nameVar', nameVar);

let  nameLet= "Tod";

// when we use let  duplicate declartion throws error, unlike with var
//let namelet= "nuck";
// Assigning new value works fine with "let" unlike in "const"
console.log('nameLet', nameLet);


// when we use const  duplicate declartion throws error,just like "let",  unlike with var

// Assigning new value gives error with "const" unlike in "let". const is even more rigid

// Note all- var, let, const are function scoped
const nameConst="Consastine";
console.log('nameConst', nameConst)

//let and const are "block scoped"- if-else for-loop

var fullName= "Asif Mahmud"
let firstName;
if(fullName)
{
  // characters before the space are taken
   firstName= fullName.split(' ')[0]
}
console.log('FirstName', firstName);



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
