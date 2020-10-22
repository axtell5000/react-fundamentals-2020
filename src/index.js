import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <>
      <Person />  
      <Message />
    </>
  );
}

const Person = () => <h4>Hello my name is Stephen</h4>;
const Message = () => {
  return <p>zoiks</p>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
