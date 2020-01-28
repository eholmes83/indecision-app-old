console.log('App.js is running')

// var template = <p>JSX from App.js!</p>
var template = React.createElement(
  "h1",
  { id: "someId "},
  "Something new"
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);