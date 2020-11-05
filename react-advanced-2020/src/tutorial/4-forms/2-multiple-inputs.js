import React, { useState } from 'react';

const ControlledInputs = () => {

  // setting up s stste that handles multiple values instead of having many
  const [person, setPerson] = useState({firstName: '', email: '', age: ''});
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      // creating a unique id for the key
      const newPerson = { ...person, id: new Date().getTime().toString() };
      
      // making sure our state is consistent by always refring to the previous state via the function like below
      setPeople([...people, newPerson]);
      setPerson({firstName: '', email: '', age: ''});
    
    } else {
      console.log('empty values');
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // dynamic property []
    setPerson({...person, [name] : value});    
  }


  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit} title="add person">add person</button>
        </form>
        { /*mapping the items to display that you have entered for display*/}
        {people.map(person => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
