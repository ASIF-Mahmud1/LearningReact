console.log(`App is running`);
// JSX - JavaScript XML
var title="Indecision App ";
var subtitle="This is Some Info" ;

 var template= (
   <div>
     <h1>{title}</h1>
     <p>{subtitle}</p>
     <ol>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ol>
   </div>
 );
 var user={
   name: "Monu" ,
   age: 0,
   locat:" NeverLand",

 }
 var name= "Asif Mahmud";
 var age= 23;
 var locat="Dhaka SA";
 var template2= (
   <div>
     <h1>My Name is {user.name}</h1>
     <p>I am {user.age} years old</p>
     <p>I am From {user.locat}</p>

   </div>
 );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
