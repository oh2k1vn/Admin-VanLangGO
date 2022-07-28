import { Button, Group, Image, Text, TextInput, Title } from '@mantine/core';
import React from 'react';
import { PasswordInput } from '../components';
import '../assets/css/style.css';

export function Login() {
  return (
    <div className='Login'>
      <div className=' w-80 rounded-xl fixed top-1/2 translate-y-[-50%] right-[10%] shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm bg-white/100'>
        <div className='py-4'>
          <Image src='https://ejob.vanlanguni.edu.vn/App_Data/Company/Logos/8107' alt=''></Image>
          <Text align='center'>Đăng nhập hệ thống</Text>
        </div>
        <form className='p-5'>
          <TextInput required label='Email' placeholder='your@email.com' />
          <PasswordInput />
          <Group position='right' mt='xl'>
            <Button variant='outline' type='submit'>
              Đăng nhập
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
}
