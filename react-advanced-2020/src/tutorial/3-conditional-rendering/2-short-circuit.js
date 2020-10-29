import React, { useState, Fragment } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <Fragment>
      <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2>
      <h3>{text || 'Jane Deer'}</h3> {/* will show second if text is false */}
      <button className="btn" title="toggle error" onClick={() => setError(!error)}>toggle error</button>
      { error && <h4>Zoiks an error</h4>} {/* will show second if text is true */}
      { error ? <p>Folks we have an error</p>: <p>Yay, no error here</p>}
    </Fragment>
  );
};

export default ShortCircuit;
