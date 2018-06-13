import React, { Component } from 'react';

class Person {
  constructor(name="No Name Given", age=0){
    this.name=name
    this.age= age
  }
  getGreeting(){
    //return "Hi I am "+ this.Name+ "!"
    // Template String
    return `Hi I am ${this.name}. `
  }
  getDescription(){
      return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person{

  constructor(name, age , major){
  //Parent class
  super(name, age)
  this.major =major
  }
  hasMajor(){
    return !!this.major
  }
  getDescription(){
  let description= super.getDescription()
  if(this.hasMajor()){
    description= description+` His major is ${this.major}`
  }
  return description
  }

}



const me= new Student("Asif Mahmud", 26, 'Computer Science');
console.log(me.getDescription())

const other= new Student()
console.log(other.getDescription())

// Challenge
class Traveller extends  Person{
  constructor(name, age , homeLocation){
    super(name, age)
    this.homeLocation= homeLocation
  }
  hasHomeLocation(){
    return !! this.homeLocation
  }
  getGreeting(){
    let greeting= super.getGreeting()
    if(this.hasHomeLocation()){
      greeting= greeting+`I am visting from ${this.homeLocation}`
    }
    return greeting
  }
}
console.log(`Challenge..........`)
const test1= new Traveller("Asif",26, "Kazakhstan")
console.log(test1.getGreeting())

const test2= new Traveller("Mumba Boyz",1000)
console.log(test2.getGreeting())

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
