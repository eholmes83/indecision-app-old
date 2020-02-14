// Visibility Toggle
// render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false,
      title: 'Visibility Toggle',
      details: 'Peek-a-boo! I see you!'
    }
  }

  handleToggleVisibility() {
    const btnTxt = document.getElementById('btn')
    if (this.state.visibility === false) {
      btnTxt.innerHTML = 'Hide details'
      this.setState({ visibility: true })
    } else {
      btnTxt.innerHTML = 'Show details'
      this.setState({ visibility: false })
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {
          this.state.visibility ? <p>{this.state.details}</p> : <p></p>
        }
        <button id='btn' onClick={this.handleToggleVisibility}>Show details</button>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))