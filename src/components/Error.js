import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Error = () => {
  return (
    <section>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </section>
  );
};
export default Error;