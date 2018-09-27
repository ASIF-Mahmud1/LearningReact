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
 var user2={
   name: "Chonu" ,
   age: 10,
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
 var template2= (
   <div>
     <h1>{user2.name ? "My Name is "+user2.name : 'I dont know his/her Name'}</h1>
     <p>I am {user2.age} years old</p>
     {getLocation(user2)}

   </div>
 );
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
