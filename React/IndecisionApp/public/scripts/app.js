"use strict";

console.log("App is running");
// JSX - JavaScript XML
var title = "Indecision App ";
var subtitle = "This is Some Info";

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    title
  ),
  React.createElement(
    "p",
    null,
    subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    ),
    React.createElement(
      "li",
      null,
      "Item 3"
    )
  )
);
var user = {
  name: "Monu",
  age: 0,
  locat: " NeverLand"
};
var user2 = {
  name: "Chonu",
  age: 10
  //var name= "Asif Mahmud";
  // var age= 23;
  //var locat="Dhaka SA";
};function getLocation(user) {
  if (user.locat) {
    return React.createElement(
      "p",
      null,
      "I am From ",
      user.locat
    );
  }
}
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user2.name ? "My Name is " + user2.name : 'I dont know his/her Name'
  ),
  React.createElement(
    "p",
    null,
    "I am ",
    user2.age,
    " years old"
  ),
  getLocation(user2)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
