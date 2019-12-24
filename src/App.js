import React, { Component } from 'react';
import './App.css';
// import Radium , { StyleRoot}  from 'radium'
import Person from './Person/Person.js'
import person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: 'lkkgjfkmgk', name: 'Nouman', age: 22 },
      { id: 'xcmvkcnmvk', name: 'Alina', age: 22 },
      { id: 'sjhdjkash', name: 'Hamza', age: 23 },
    ],
    showPerson: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({  
  //     persons: [
  //       { name: newName, age: 60 },
  //       { name: 'Taha', age: 40 },
  //       { name: 'Shabi', age: 23 },
  //     ]
  //   })
  // }

  deletPerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  changeName = (event, id) => {
    const findPer = this.state.persons.findIndex(per => {
      return per.id === id
    });
    const person = { ...this.state.persons[findPer] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    console.log(persons + '////////////////////////////////')
    persons[findPer] = person;
    this.setState({ persons: persons })
  }
  toggelePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow,
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer',
      // ':hover':{
      //   backgroundColor : 'lightgreen',
      //   color: 'black'
      // }
    };

    let personsOut = (
      <p>click Button</p>
    );
    if (this.state.showPerson) {
      personsOut = (
        <div>
          {this.state.persons.map((val, index) => {
            console.log(val, index)
            return (
              <Person
                click={() => this.deletPerson(index)}
                name={val.name}
                age={val.age}
                key={val.id} 
                passChangeName={(event) => this.changeName(event, val.id)}
              />
            )
          })}
        </div>
      )
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color: 'black'
      // }
    }
    const styleClass = [];
    if (this.state.persons.length <= 2) {
      styleClass.push('backC')
    }
    if(this.state.persons.length <= 1){
      styleClass.push('check')
    }
    console.log(styleClass);
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hello</h1>
        <p className={styleClass.join(' ')}>this actually works</p>
        <div>
          <button onClick={this.toggelePerson}
            style={style}
          >Change</button>
        </div>
        {personsOut}
      </div>
      // {/* </StyleRoot> */}
    );
  }
}

// export default Radium(App);
export default App;
