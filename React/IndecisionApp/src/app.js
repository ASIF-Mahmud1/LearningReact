console.log(`App is running`);
// JSX - JavaScript XML

const app= {
   title: "Indecision App ",
   subtitle:"This is Some Info- Subtitle" ,
   options:[]
};
///// Form Submit Event

const onFormSubmit= (event)=>{
   event.preventDefault();
   console.log(`Add Option is Clicked`);
   const option= event.target.elements.option.value;
   console.log(`You wrote ${option}`);
   // Clear Out Input Field
   event.target.elements.option.value='';
   this.app.push(option);
}

 const template= (
   <div>
     <h1>{app.title}</h1>
     {app.subtitle && <p>{app.subtitle}</p>}
     <p>{app.options.length>0 ? "Here are your options" : "No Options"}</p>
     <p>Size Of Array : {app.options.length}</p>
     <ol>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ol>

     <form onSubmit= {onFormSubmit}>
       <input type= 'text' name ='option' />
       <button> Add Option</button>
     </form>
   </div>
 );

 const appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
