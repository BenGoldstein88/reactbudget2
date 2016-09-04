var React = require('react');
var ReactDOM = require('react-dom')
var routes = require('./config/routes');
// var PromptContainer = require('../containers/PromptContainer')

ReactDOM.render(
  routes,
  document.getElementById('app')
  );