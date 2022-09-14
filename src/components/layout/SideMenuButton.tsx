import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '@mantine/core';

interface Props {
  icon?: JSX.Element | string;
  name: string;
  path: string;
  admin?: boolean;
  showMenu: boolean;
}

export function SideMenuButton({ path, icon, name, showMenu }: Props) {
  return (
    <Tooltip
      disabled={showMenu}
      label={!showMenu && name}
      transition='scale-x'
      transitionDuration={300}
      position='right'
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `ButtonLeftMenu  text-green-500 border-r-4 border-green-500 bg-green-200 `
            : `ButtonLeftMenu`
        }
      >
        {icon}
        {showMenu && <p className='flex-1'>{name}</p>}
      </NavLink>
    </Tooltip>
  );
}
