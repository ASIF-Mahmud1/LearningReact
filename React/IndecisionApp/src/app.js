console.log(`App is running`);
// JSX - JavaScript XML

const app= {
   title: "Indecision App ",
   subtitle:"This is Some Info- Subtitle" ,
   options:["one", "two", "three"]
};

 const template= (
   <div>
     <h1>{app.title}</h1>
     {app.subtitle && <p>{app.subtitle}</p>}
     <p>{app.options.length>0 ? "Here are your options" : "No Options"}</p>
     <ol>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ol>
   </div>
 );

let counter =0;

const addOne=(counter)=>{
console.log('addOne');
}

const minusOne=()=>{
  console.log("minusOne");
}

const reset=()=>{
  console.log('reset');
}

 const template2=(
   <div>
     <h1>Count: {counter}</h1>
     <button onClick={addOne}> +1 </button>
     <button onClick={minusOne}> -1 </button>
     <button onClick={reset}> Reset </button>
   </div>
 );

const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
