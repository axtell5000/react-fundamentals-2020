import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';
// reducer function

const Index = () => {
  // state
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setModal] = useState( );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      setModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name}]);
      setName('');
    } else {
      setModal(true);
    }    
  }

  return (
    <>
      { showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" title="Add Person">Add Person</button>
      </form>
      {
        people.map(person => {
          return (
            <div key={person.id}>
              <h4>{person.name}</h4>
            </div> 
          )
        })
      }
    </>
  );
};

export default Index;
