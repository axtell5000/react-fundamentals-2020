import React, { useState, Fragment } from 'react';

// useState replaces the whole setState() mechanism
// When using hooks, component has to be capitalised
const UseStateBasics = () => {
  const [text, setText] = useState('random title'); // this has to be in the body of function / class - applies to all hooks

  const handleClick = () => {
    if (text === 'random title') {
      setText('Howdy');
    } else {
      setText('random title');
    }
    
  }

  return (
    <Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </Fragment>
  )
};

export default UseStateBasics;
