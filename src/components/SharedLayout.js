import { Outlet } from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';
import '../App.css'
// import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <StyledNavbar />
     {/**  <Navbar/> */}
      <Outlet />
    </>
  );
};
export default Home;