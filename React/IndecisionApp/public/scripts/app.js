"use strict";

console.log("App is running");
// JSX - JavaScript XML

var app = {
  title: "Indecision App ",
  subtitle: "This is Some Info- Subtitle",
  options: []
};
///// Form Submit Event

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  console.log("Add Option is Clicked");
  var option = event.target.elements.option.value;
  console.log("You wrote " + option);
  // Clear Out Input Field
  event.target.elements.option.value = '';
  undefined.app.push(option);
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
    "p",
    null,
    "Size Of Array : ",
    app.options.length
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
  ),
  React.createElement(
    "form",
    { onSubmit: onFormSubmit },
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      " Add Option"
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
