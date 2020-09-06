import React, { useState } from 'react';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [multiples, setMultiple]= useState(1)

  return (
    <div>
      <p>You clicked {count} times</p>
  <p>Mutiples: { multiples}</p>
  <button onClick={()=>{  setMultiple(multiples *2)}}> Multiples </button>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}