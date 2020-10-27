import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return <>
    {
      people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} title="Remove item">Remove</button>
          </div>
        );
      })
    }
    <button type="button" className="btn" onClick={() => setPeople([])} title="Clear items">clear items</button>
  </>;
};

export default UseStateArray;
