import { Navbar as Nav } from '@mantine/core';
import React from 'react';
import { Logo, MenuList, UserInfo } from '../components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface OpenType {
  open: boolean;
  setOpen: () => void;
}

export default function NavBar() {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Nav p={'md'} className={`${open ? 'w-72' : 'w-20'} relative bg-[#228be6] duration-300`}>
      <Logo />
      <div className='border border-2 border-[#228be6] absolute -right-4 top-10 bg-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer'>
        {open ? (
          <BiChevronLeft onClick={handleOpen} size={20} />
        ) : (
          <BiChevronRight onClick={handleOpen} size={20} />
        )}
      </div>
      <MenuList open={open} />
      <UserInfo open={open} image='' name='HieuNguyen' email='oh2k1vn@gmail.com' />
    </Nav>
  );
}
