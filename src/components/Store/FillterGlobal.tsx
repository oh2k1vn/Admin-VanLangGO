import * as React from 'react';
import { Input } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';

export interface IFillterGlobalProps {}

export function FillterGlobal(props: IFillterGlobalProps) {
  return (
    <Input.Wrapper id='input-demo' label='Tìm kiếm'>
      <Input id='input-demo' placeholder='Nhập tên cửa hàng' className='w-80' icon={<BiSearch />} />
    </Input.Wrapper>
  );
}
