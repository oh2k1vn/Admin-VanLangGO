import * as React from 'react';
import { LeftSideMenu } from './LeftSideMenu';

export function DefaultLayout({ children }: any) {
  return (
    <div className='flex '>
      <LeftSideMenu />
      <div className='flex-1 m-4'>{children}</div>
    </div>
  );
}
