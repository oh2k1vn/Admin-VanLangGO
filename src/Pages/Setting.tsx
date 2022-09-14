import { Tabs } from '@mantine/core';
import * as React from 'react';
import { BiPhotoAlbum, BiMessageDetail, BiCog } from 'react-icons/bi';

export function Setting() {
  return (
    <Tabs color='teal' defaultValue='first'>
      <Tabs.List>
        <Tabs.Tab value='gallery' icon={<BiPhotoAlbum size={20} />} className='dark:text-slate-300'>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value='messages'
          icon={<BiMessageDetail size={20} />}
          className='dark:text-slate-300'
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab value='settings' icon={<BiCog size={20} />} className='dark:text-slate-300'>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='gallery' pt='xs'>
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value='messages' pt='xs'>
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value='settings' pt='xs'>
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
