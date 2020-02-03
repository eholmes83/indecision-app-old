console.log('App.js is running')

// Pick back up from 19.

const app = {
  title: 'Indecision App',
  subtitle: 'Where to make decisions',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    reRender()
  }
}

const removeAll = () => {
  app.options = []
  reRender()
}

const reRender = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {(app.subtitle && <p>{app.subtitle}</p>)}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button onClick={removeAll}>Remove All</button>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type='text' name='option' />
      <button>Add Option</button>
    </form>
  </div>
)
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app')

reRender()

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