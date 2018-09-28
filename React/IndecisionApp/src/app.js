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
 const user={
   name: "Monu" ,
   age: 100,
   locat:" NeverLand",
 }
 const user2={
   name: "Chonu" ,
   age: 19
 }
 //var name= "Asif Mahmud";
// var age= 23;
 //var locat="Dhaka SA";
 function getLocation(user)
 {
   if(user.locat)
   {
     return<p>I am From {user.locat}</p>;
   }
 }
 const template2= (
   <div>
     <h1>{user.name ? "My Name is "+user.name : 'I dont know his/her Name'}</h1>
     {user.age>15 &&  <p>I am {user.age} years old </p> }
     {getLocation(user)}

   </div>
 );
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
