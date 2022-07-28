import { Navbar } from '@mantine/core';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import { BiChevronRight, BiLogOut } from 'react-icons/bi';

interface UserButtonProps {
  open: boolean;
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export function UserInfo({ image, name, email, icon, open, ...others }: UserButtonProps) {
  return (
    <Navbar.Section>
      {open ? (
        <UnstyledButton {...others}>
          <Group>
            <Avatar
              size='lg'
              radius='xl'
              src={image || 'https://img.icons8.com/clouds/256/000000/futurama-bender.png'}
              alt='Vitaly Rtishchev'
              color='red'
            ></Avatar>
            <div className='flex-1'>
              <Text size='lg' className='font-medium'>
                {name || 'name'}
              </Text>
              <Text color='yellow' size='sm'>
                {email || 'email'}
              </Text>
            </div>
            {icon || <BiChevronRight size={25} />}
          </Group>
        </UnstyledButton>
      ) : (
        <div className='bg-[#3897e9] p-2 rounded-md cursor-pointer'>
          <BiLogOut size={30} color='white' />
        </div>
      )}
    </Navbar.Section>
  );
}
