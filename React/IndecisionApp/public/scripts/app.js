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

var addOne = function addOne() {
  counter++;
  console.log('addOne', counter);
  renderPage();
};

var minusOne = function minusOne() {
  counter--;
  console.log("minusOne");
  renderPage();
};

var reset = function reset() {
  counter = 0;
  console.log('reset');
  renderPage();
};

var appRoot = document.getElementById('app');

var renderPage = function renderPage() {
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

  ReactDOM.render(template2, appRoot);
};

renderPage();
