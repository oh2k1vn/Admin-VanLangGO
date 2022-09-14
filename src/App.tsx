import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ButtonDarkMode } from './components/common';
import { DefaultLayout } from './components/layout/DefaultLayout';
import { publicRouters } from './config/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        {publicRouters?.map((route, index) => {
          const Page = route.component;
          const Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route?.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
      <ButtonDarkMode />
    </>
  );
}

export default App;
