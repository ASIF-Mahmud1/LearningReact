'use strict';

console.log('App is running');
// JSX - JavaScript XML
var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'My Name is Asif'
  ),
  React.createElement(
    'p',
    null,
    'I am 12 years olf'
  ),
  React.createElement(
    'p',
    null,
    'I am From Bangladesh'
  ),
  React.createElement(
    'p',
    null,
    'I Feel Good!'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
