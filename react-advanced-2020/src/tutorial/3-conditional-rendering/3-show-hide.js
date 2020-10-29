import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" title="Show / Hide" onClick={() => setShow(!show)}>Show / Hide</button>
      { show && <Item />}
    </>
  );
};

const Item = () => {
  return (
    <div style={{ marginTop: '3rem'}}>
      <h1>window</h1>
      <h2>size : </h2>
    </div>
  );
}

export default ShowHide;
