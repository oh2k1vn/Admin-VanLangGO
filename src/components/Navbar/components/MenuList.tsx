import { Box, Navbar, NavLink, ScrollArea, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { FcHome } from 'react-icons/fc';
import { BiChevronRight } from 'react-icons/bi';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const data = [
  { icon: FcHome, label: 'Home', description: 'Item with description' },
  {
    icon: FcHome,
    label: 'Dashboard',
    rightSection: <BiChevronRight size={14} />,
  },
  {
    icon: FcHome,
    label: 'Activity',
    nav: [
      { icon: FcHome, label: 'Home', description: 'Item with description' },
      {
        icon: FcHome,
        label: 'Dashboard',
        rightSection: <BiChevronRight size={14} />,
      },
      { icon: FcHome, label: 'Activity' },
    ],
  },
];

export function MenuList(props: any) {
  const [active, setActive] = React.useState(0);
  const items = data.map((item, index) => (
    <NavLink
      // disabled={}
      component={Link}
      to={item.label}
      key={item.label}
      active={index === active}
      label={props.open && item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size={16} />}
      onClick={() => setActive(index)}
      className='rounded-lg'
    ></NavLink>
  ));
  console.log(location);

  return (
    <Navbar.Section grow component={ScrollArea} className='overflow-x-hidden' mx='-xs' px='xs'>
      <Box>{items}</Box>
    </Navbar.Section>
  );
}
