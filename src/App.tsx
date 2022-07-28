import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/page';
import { Login } from './pages/auth/pages';

function App() {
  const [login, setLogin] = React.useState(false);
  return (
    <>
      {login ? (
        <Login />
      ) : (
        <div className='flex gap-4'>
          <NavBar />
          <div className='flex-1'>
            <Routes>
              <Route path='/' element={'Trang chủ'} />
              <Route path='/Dashboard' element={'Dashboard'} />
              <Route path='/Home' element={'Home'} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
