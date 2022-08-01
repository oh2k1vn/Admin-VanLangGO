import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from './components/layout';
import { PrivateRoute } from './components/layout/PrivateRoute';
import { Login } from './pages/auth/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
