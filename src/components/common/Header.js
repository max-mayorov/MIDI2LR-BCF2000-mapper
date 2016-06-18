import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/mapper" activeClassName="active">Mapper</Link>
      {" | "}
      <Link to="/output" activeClassName="active">Output</Link>
      {" | "}
      <Link to="/input" activeClassName="active">Input</Link>
      {" | "}      
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};


export default Header;
