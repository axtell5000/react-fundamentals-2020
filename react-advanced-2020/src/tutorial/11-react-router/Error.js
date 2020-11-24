import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/" title="Bact to home" className="btn">Back Home</Link>
    </div>
  );
};

export default Error;
