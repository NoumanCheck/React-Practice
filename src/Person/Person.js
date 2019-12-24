import React from "react";
// import Radium from 'radium'
import './Person.css'

const person = props => { 
  const age = Math.floor(Math.random() * 30);

  // const style = {
  //   '@mdeia (min-width: 500px)':{
  //     width:'450px'
  //   }
  // };

  return (
    <div className='Person' >
      <p onClick={props.click}>I 'm {props.name} and i am {props.age} years old</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.passChangeName} value={props.name}
      />
    </div>
  );
};

// export default Radium(person);
export default person;
