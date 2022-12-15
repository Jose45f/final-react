// test 

import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/contactus'>contactus</Link>
    </nav>
  );
};
export default Navbar;