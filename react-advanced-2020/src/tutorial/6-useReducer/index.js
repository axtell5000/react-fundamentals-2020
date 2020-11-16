import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';

// reducer function
const reducer = (state, action) => {

  // can put this is a separate file pluse use the case structure
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    // you have to return state at least
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added'
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,      
      isModalOpen: true,
      modalContent: 'Please enter value'
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return {...state, people: newPeople};
  }

  throw new Error('No matching action type'); 
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hi there'
};

const Index = () => {
  // state
  const [name, setName] = useState('');
  
  // reducer
  // Just keep in mind to think in part of the way we did things with Redux, dispatching the action and doing something with the state in the reducer based on the action type
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name};
      dispatch({ type: 'ADD_ITEM', payload: newItem});
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE'});
    }    
  }

  const closeModal = () => dispatch({type: 'CLOSE_MODAL'});

  return (
    <>
      { state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" title="Add Person">Add Person</button>
      </form>
      {
        state.people.map(person => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id})} title="Remove">Remove</button>
            </div> 
          )
        })
      }
    </>
  );
};

export default Index;
