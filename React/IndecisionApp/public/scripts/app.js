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
var name = "Asif Mahmud";
var age = 23;
var locat = "Dhaka SA";
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "My Name is ",
    user.name
  ),
  React.createElement(
    "p",
    null,
    "I am ",
    user.age,
    " years old"
  ),
  React.createElement(
    "p",
    null,
    "I am From ",
    user.locat
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
