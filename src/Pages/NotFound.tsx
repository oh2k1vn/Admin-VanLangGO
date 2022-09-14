import * as React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <p className='mt-6 text-2xl text-center'>Không tìm thấy trang web !</p>
        <div className='flex justify-center'>
          <Link
            to='/'
            className='px-8 py-2 bg-primary rounded-md text-xl mt-8 inline-block hover:bg-blue-600 transition duration-300'
          >
            Quay trở lại trang chủ
          </Link>
        </div>
      </div>
    </>
  );
}
