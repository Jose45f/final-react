import { Outlet } from 'react-router-dom';
import '../App.css'

const Home = () => {
  return (
    <>
      <h2 className='top'>Products</h2>
      <Outlet />
    </>
  );
};
export default Home;