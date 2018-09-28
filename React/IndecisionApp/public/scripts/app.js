"use strict";

console.log("App is running");
// JSX - JavaScript XML

var app = {
  title: "Indecision App ",
  subtitle: "This is Some Info- Subtitle",
  options: ["one", "two", "three"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No Options"
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
  age: 100,
  locat: " NeverLand"
};
var user2 = {
  name: "Chonu",
  age: 19
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
    user.name ? "My Name is " + user.name : 'I dont know his/her Name'
  ),
  user.age > 15 && React.createElement(
    "p",
    null,
    "I am ",
    user.age,
    " years old "
  ),
  getLocation(user)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
