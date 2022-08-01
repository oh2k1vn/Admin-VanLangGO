import React from 'react';
import { Navigate } from 'react-router-dom';
import Err from './assets/image/404.png';

export default function NotFound() {
  const [redirectNow, setRedirectNow] = React.useState(false);
  setTimeout(() => setRedirectNow(true), 7000);
  return redirectNow ? (
    <Navigate to='/' />
  ) : (
    <div className='relative mt-12'>
      <img src={Err} alt='' className='absolute top-2/3 left-1/2 -translate-x-1/2 ' />
    </div>
  );
}
