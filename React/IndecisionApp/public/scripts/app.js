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

  if (option) {
    event.target.elements.option.value = '';
    app.options.push(option);
    renderPage();
  }
};

var removeAll = function removeAll() {
  app.options.length = 0;
  renderPage();
};

var renderPage = function renderPage() {
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
      "button",
      { onClick: removeAll },
      " Remove All"
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

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderPage();
