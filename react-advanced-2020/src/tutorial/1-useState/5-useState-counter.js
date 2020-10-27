import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reset = () => {
    setValue(0);
  };

  const complexIncr = () => {
    setTimeout(()=>{
      // setValue(value + 1); not correct doing like this
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000)
  }

  return <>
    <section style={{ margin: '3rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" title="decrease" onClick={() => setValue(value - 1)}>decrease</button>
      <button className="btn" title="reset" onClick={reset}>reset</button>
      <button className="btn" title="increase" onClick={() => setValue(value + 1)}>increase</button>
    </section>

    <section style={{ margin: '3rem 0'}}>
      <h2>complex counter</h2>
      <h1>{value}</h1> 
      <button className="btn" title="increase" onClick={complexIncr}>increase later</button>
    </section>
  </>;
};

export default UseStateCounter;
