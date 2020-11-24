import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" title="Home">Home</Link>
        </li>
        <li>
          <Link to="/about" title="About">About</Link>
        </li>
        <li>
          <Link to="/people" title="People">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
