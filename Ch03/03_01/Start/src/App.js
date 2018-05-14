import React, { Component } from 'react'
import loggify from "./loggify";

class App extends Component {
  // Static Props
  static displayName = 'App'

  constructor(props) {
    super(props)

  }

  oneFunction = () => {
    console.log("oneFunction")
    console.log(this.props)
  }

  useArrows = () => {
    console.log("useArrows works without binding")
    console.log(this.props)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <button
          onClick={this.oneFunction}
        >
          test oneFunction
        </button>

        <button
          onClick={this.useArrows}
        >
          test useArrows
        </button>
      </div>
    )
  }
}

App = loggify(App)

export default App
