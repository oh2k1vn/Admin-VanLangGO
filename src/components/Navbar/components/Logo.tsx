import { Navbar } from '@mantine/core';
import React from 'react';
import LogoNavBar from './Logo.png';

export function Logo() {
  return (
    <Navbar.Section>
      <img src={LogoNavBar} alt='' />
    </Navbar.Section>
  );
}
