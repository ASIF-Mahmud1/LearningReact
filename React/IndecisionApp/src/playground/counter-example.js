let counter =0;

const addOne=()=>{
counter++;
console.log('addOne', counter);
renderPage();

}

const minusOne=()=>{
  counter--;
  console.log("minusOne");
  renderPage();
}

const reset=()=>{
  counter=0;
  console.log('reset');
  renderPage();
}

const renderPage=()=>
{
  const template2=(
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={addOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}> Reset </button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
}

renderPage();
