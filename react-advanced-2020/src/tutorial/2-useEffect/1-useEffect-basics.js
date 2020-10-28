import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  // useEffect is to run any side effects that is not the component
  // useeffect happens after re-render
  // One cant put a hook in conditionals, but you can put a conditional in a hook
  // second parameter is the dependencies, if its an empty array it will only run once on initial render
  // if there is something in it, it will run only when said value is changed
  useEffect(() => {
    if (value > 0) {
      document.title = `New messages (${value})`;
    }    
  }, [value]);

  useEffect(() => {
    console.log('second useEffect run');
  }, [])

  console.log('render component');

  return <>
    <h1>{value}</h1>
    <button type="button" className="btn" onClick={() => setValue(value + 1)} title="click please">click please</button>
  </>;
};

export default UseEffectBasics;
