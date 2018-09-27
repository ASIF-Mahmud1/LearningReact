console.log(`App is running`);
// JSX - JavaScript XML
var template =(
  <div>
    <h1>InDecision Application!</h1>
    <p>This is some Info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </div>
);
var name="as";
var age= "sd";
var location= "sd";
var template2 =(
  <div>
    <h1>{name}</h1>
    <p>{age}</p>
    <p>{location}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
