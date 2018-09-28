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

var counter = 0;

var addOne = function addOne(counter) {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log("minusOne");
};

var reset = function reset() {
  console.log('reset');
};

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    counter
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    " +1 "
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    " -1 "
  ),
  React.createElement(
    "button",
    { onClick: reset },
    " Reset "
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
