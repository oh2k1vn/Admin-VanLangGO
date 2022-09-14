import * as React from 'react';
import { Table } from '~/components/User';

const columns = [
  { name: 'id', hidden: true },
  {
    name: 'first_name',
    label: 'First Name',
    render: ({ value }: { value: string }) => (
      <>
        <span role='img' aria-label='mage'>
          🧙
        </span>
        {value}
      </>
    ),
  },
  {
    name: 'last_name',
    label: 'Last Name',
  },
];

const data = [
  {
    id: 1,
    first_name: 'Frodo',
    last_name: 'Baggins',
  },
  {
    id: 2,
    first_name: 'Samwise',
    last_name: 'Gamgee',
  },
];

export function User() {
  return (
    <>
      <Table />
    </>
  );
}
