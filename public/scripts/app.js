'use strict';

console.log('App.js is running');

// Pick back up from 19.

var app = {
  title: 'Indecision App',
  subtitle: 'Where to make decisions',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    reRender();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  reRender();
};

var reRender = function reRender() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item One'
      ),
      React.createElement(
        'li',
        null,
        'Item Two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

reRender();

// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {(app.subtitle && <p>{app.subtitle}</p>)}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//     <p>{app.options.length}</p>
//     <ol>
//       <li>Item One</li>
//       <li>Item Two</li>
//     </ol>
//     <form onSubmit={onFormSubmit}>
//       <input type='text' name='option' />
//       <button>Add Option</button>
//     </form>
//   </div>
// )


// ReactDOM.render(template, appRoot);
