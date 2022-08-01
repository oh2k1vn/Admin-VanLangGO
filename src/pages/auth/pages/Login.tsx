import { Button, Group, Image, Text, TextInput } from '@mantine/core';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react';
import { useAppDispatch } from '~/app/hook';
import { auth } from '~/firebaseConfig';
import '../assets/css/style.css';
import { PasswordInput } from '../components';

export function Login() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [user, setUser] = React.useState(null);
  const [err, setErr] = React.useState(false);

  const dispatch = useAppDispatch();

  const login = async (e: any) => {
    e.preventDefault();
    // try {
    //   const user = await signInWithEmailAndPassword(auth, email, password);
    //   console.log(user);
    //   localStorage.setItem('access_token', user.user.accessToken);
    //   setEmail('');
    //   setPassword('');
    // } catch (error: any) {
    //   setErr(true);
    // }

    dispatch
  };



  return (
    <div className='Login object-cover'>
      <div className=' w-80 rounded-xl fixed top-1/2 translate-y-[-50%] right-[10%] shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm bg-white/100'>
        <div className='pt-4'>
          <Image src='https://ejob.vanlanguni.edu.vn/App_Data/Company/Logos/8107' alt=''></Image>
          <Text align='center'>Đăng nhập hệ thống</Text>
          {err && (
            <Text align='center' className=' text-red-600'>
              Bạn nhập sai tài khoản! Vui lòng nhập lại
            </Text>
          )}
        </div>
        <div className='p-5'>
          <TextInput
            required
            label='Email'
            value={email}
            placeholder='your@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput password={password} setPassword={setPassword} />

          <Group position='right' mt='xl'>
            <Button variant='outline' type='submit' onClick={login}>
              Đăng nhập
            </Button>
          </Group>
        </div>
      </div>
    </div>
  );
}
