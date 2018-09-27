"use strict";

console.log("App is running");
// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "InDecision Application!"
  ),
  React.createElement(
    "p",
    null,
    "This is some Info"
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
var name = "as";
var age = "sd";
var location = "sd";
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    name
  ),
  React.createElement(
    "p",
    null,
    age
  ),
  React.createElement(
    "p",
    null,
    location
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
