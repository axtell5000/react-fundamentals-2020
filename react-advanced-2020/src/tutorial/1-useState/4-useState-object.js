import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Stephen',
    age: 49,
    message: 'This is a super message'
  });
  
  const changeMessage = () => {
    setPerson({...person, message: 'Hello there'}); // when working with objects and you want to change a single item in it, you have to use the spread operator for the items you are not changing
  }

  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>Change message</button>
  </>;
};

export default UseStateObject;
