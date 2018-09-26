'use strict';

console.log('App is running');
// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'InDecision App!'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
