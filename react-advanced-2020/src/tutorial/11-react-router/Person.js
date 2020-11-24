import React, { useState, useEffect } from 'react';
import { data } from '../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {

  //state
  const [name, setName] = useState('John Doe');

  // pulling id off params
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find( person => person.id === parseInt(id, 10));
    setName(newPerson.name)
  }, [])


  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" title="Back To People" className="btn">Back To People</Link>
    </div>
  );
};

export default Person;
