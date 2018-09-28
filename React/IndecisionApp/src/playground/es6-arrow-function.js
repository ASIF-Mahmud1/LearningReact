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
const firstNameArrow= (fullName)=>{
  if(fullName)
  {
    return ( fullName.split(' ')[0] );
  }
};

// Arrow Function ShortHand Syntax
const firstNameArrowShortHand= (fullName) => fullName.split(' ')[0];
///////////////////
const fullName= "Asif Mahmud Mofo";


console.log("First Name is "+firstNameArrow(fullName)+ " (From Arrow Function)" );

console.log("First Name is "+firstNameArrow(fullName)+ " (From Arrow Function- ShortHand Notation)" );
