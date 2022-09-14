import * as React from 'react';
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiBookAdd,
  BiBookContent,
  BiCartAlt,
  BiCog,
  BiGridAlt,
  BiMailSend,
  BiPaperPlane,
  BiPurchaseTagAlt,
  BiStore,
  BiUserCircle,
} from 'react-icons/bi';
import { SideMenuButton } from './SideMenuButton';
import { Button } from '@mantine/core';

export function LeftSideMenu() {
  const [showMenu, setShowMenu] = React.useState(true);
  return (
    <div
      className={` shadow-2xl min-h-screen flex flex-col bg-white dark:bg-zinc-600 duration-200 ${
        showMenu ? 'w-60' : 'w-20'
      }`}
    >
      <div>
        <img
          src='https://bookface-images.s3.amazonaws.com/logos/8afeac8fec711d64037cb0f7d4579747f4d04d4a.png'
          alt=''
          className='mx-auto w-1/2'
          width={200}
        />
      </div>
      <div className='flex-1'>
        {data?.map((e, i) => (
          <SideMenuButton key={i} name={e.name} path={e.path} icon={e.icon} showMenu={showMenu} />
        ))}
      </div>

      <Button
        onClick={() => setShowMenu(!showMenu)}
        className='hover:bg-slate-300 duration-200'
        variant='white'
      >
        {showMenu ? (
          <BiArrowFromRight color='green' size={24} />
        ) : (
          <BiArrowFromLeft color='green' size={20} />
        )}
      </Button>
    </div>
  );
}

const data = [
  { name: 'Thống kê', path: '/', icon: <BiGridAlt size={22} /> },
  { name: 'Người dùng', path: '/user', icon: <BiUserCircle size={22} /> },
  { name: 'Cửa hàng', path: '/store', icon: <BiStore size={22} /> },
  { name: 'Sản phẩm', path: '/product', icon: <BiBookAdd size={22} /> },
  { name: 'Danh mục', path: '/category', icon: <BiBookContent size={22} /> },
  { name: 'Đơn hàng', path: '/order', icon: <BiCartAlt size={22} /> },
  { name: 'Khuyến mãi', path: '/promotion', icon: <BiPurchaseTagAlt size={22} /> },
  { name: 'Tin nhắn', path: '/chat', icon: <BiPaperPlane size={22} /> },
  { name: 'Phản hồi', path: '/response', icon: <BiMailSend size={22} /> },
  { name: 'Cài đặt', path: '/setting', icon: <BiCog size={22} /> },
];
