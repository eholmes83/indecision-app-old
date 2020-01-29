console.log('App.js is running')

// Pick back up from 11. JSX Expressions

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
)

var templateTwo = (
  <div>
    <h1>Chuck</h1>
    <p>Age: 45</p>
    <p>Location: Bora Bora</p>
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);