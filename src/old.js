import React, { Component } from 'react'
import UserInput from './Person/UserInput'
import UserOutput from './Person/UserOutput'

class App extends Component {
  state = {
    userName: 'Nouman Suleman'
  }

  userNameChange = (event) => {
    this.setState({
      userName : event.target.value,
    })
  }

  render() {
    return (
      <div className='App'>
        <UserInput changed={this.userNameChange} />
        <UserOutput userIn={this.state.userName}  />
        <UserOutput userIn={this.state.userName}  />
        <UserOutput userIn={this.state.userName} />

      </div>
    )
  }
}

export default App
