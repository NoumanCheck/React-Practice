//Assignment



import React, { Component } from 'react'
import './App.css'
import Validation from './Person/Validation'
import Char from './Person/Char'

class App extends Component {
  state = {
    userinput: ''
  }

  changePera = (event) => {
    this.setState({
      userinput: event.target.value
    })
  }

  deleteChar = (index) =>{
    const text = this.state.userinput.split('')
    text.splice(index, 1);
    const updateChar = text.join('');
    this.setState({userinput:updateChar})
  }

  render() {
    const charList = this.state.userinput.split('').map((val, index) => {
      return <Char
        charProps={val}
        key={index}
        clicked={() => this.deleteChar(index)}
      />
    })
    return (
      <div className='App'>
        <input type='text'
          onChange={this.changePera}
          value={this.state.userinput}
        />
        <p>{this.state.userinput}</p>
        <Validation
          inputLength={this.state.userinput.length}
        />
        {charList}
      </div>
    )
  }
}

export default App

