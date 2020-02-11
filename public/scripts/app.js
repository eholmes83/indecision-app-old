'use strict';

var app = {
  title: 'Visibility Toggle',
  subtitle: 'Peek-a-boo! I see you!',
  on: 'Hide details',
  off: 'Show details'
};

var toggleMsg = function toggleMsg() {
  var on = document.getElementById('subtitle');
  console.log(on);
  if (!on) {
    on;
  }
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      { id: 'subtitle' },
      app.subtitle
    ),
    React.createElement(
      'button',
      { onClick: toggleMsg },
      'Show details'
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
