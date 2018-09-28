'use strict';

/*
const cube= function(x)
{
  return x*x*x;
};
const cubeArrow= (x)=>{
  return x*x*x;
};
console.log("Number is "+cubeArrow(2));
*/

// Arrow Function
var firstNameArrow = function firstNameArrow(fullName) {
  if (fullName) {
    return fullName.split(' ')[0];
  }
};

// Arrow Function ShortHand Syntax
var firstNameArrowShortHand = function firstNameArrowShortHand(fullName) {
  return fullName.split(' ')[0];
};
///////////////////
var fullName = "Asif Mahmud Mofo";

console.log("First Name is " + firstNameArrow(fullName) + " (From Arrow Function)");

console.log("First Name is " + firstNameArrow(fullName) + " (From Arrow Function- ShortHand Notation)");
