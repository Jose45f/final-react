import { NavLink } from 'react-router-dom';
import React from 'react';
import '../App.css'


const StyledNavbar  = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
      <NavLink
        to='/contactus'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Contact Us
      </NavLink>
    </nav>
  );
};
export default StyledNavbar ;