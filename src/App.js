import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Error from './components/Error';
import SharedLayout from './components/SharedLayout';
import SingleProduct from './components/SingleProduct';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import SharedProductLayout from './components/SharedProductLayout';
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;