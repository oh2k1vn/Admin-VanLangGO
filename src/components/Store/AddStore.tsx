import React from 'react';
import { Input, Textarea, Button } from '@mantine/core';
import { useForm } from 'react-hook-form';

interface Props {
  setForm: (data: any) => void;
}

export function AddStore({ setForm }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => setForm(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
      <Input
        type='text'
        placeholder='Tên cửa hàng'
        {...register('Tên cửa hàng', { required: true, maxLength: 80 })}
      />
      <Input
        type='tel'
        placeholder='Số điện thoại'
        {...register('Số điện thoại', { required: true, maxLength: 12 })}
      />
      <Input
        type='text'
        placeholder='Email'
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <Input
        type='text'
        placeholder='Địa chỉ'
        {...register('Địa chỉ', { required: true, maxLength: 100 })}
      />
      <Textarea placeholder='Mô tả' {...register('Mô tả', {})} withAsterisk />
      <Input type='url' placeholder='Hình ảnh' {...register('Hình ảnh', { required: true })} />

      <Button fullWidth variant='outline' type='submit'>
        Xác nhận thêm
      </Button>
    </form>
  );
}
