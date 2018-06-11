import React from "react";


let count=0
const addOne= ()=>{
   count++
console.log(count,"addOne")
}

const substractOne=()=>{
    count--
  console.log(count,"substractOne")
}

const reset= ()=>{
  count=0
  console.log(count,'reset')
}


class Template3 extends React.Component{

  render(){
    return(
      <div>
          <h1> Count: {count}</h1>
          <button onClick={addOne} >+1</button> <br/>
          <button onClick={substractOne}>-1</button> <br/>
          <button onClick={reset}>Reset</button>
      </div>
    )
  }
}








export default Template3;
