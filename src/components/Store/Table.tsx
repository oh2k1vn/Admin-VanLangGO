import { Checkbox, Modal, Popover } from '@mantine/core';
import * as React from 'react';
import { BiColumns, BiPlus } from 'react-icons/bi';
import { useRowSelect, useTable } from 'react-table';
import { AddStore } from './AddStore';
import { FillterGlobal } from './FillterGlobal';
export interface ITableProps {
  columns: any[];
  data: any[];
}
const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }: any, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <Checkbox label='Tất cả' type='checkbox' ref={resolvedRef} {...rest} />
    </>
  );
});

export function Table({ columns, data }: ITableProps) {
  const [opened, setOpened] = React.useState(false);
  const [form, setForm] = React.useState({});

  console.log(form);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  );

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <FillterGlobal />
        <div>
          <div
            className='hover:bg-slate-100 inline-block p-2 rounded-full cursor-pointer duration-200'
            onClick={() => setOpened(true)}
          >
            <BiPlus size={30} color='green' />
          </div>
          <Popover width={200} position='bottom-end' withArrow shadow='md'>
            <Popover.Target>
              <div className='hover:bg-slate-100 inline-block p-2 rounded-full cursor-pointer duration-200'>
                <BiColumns size={30} color='green' />
              </div>
            </Popover.Target>
            <Popover.Dropdown>
              <div className='flex flex-col gap-2'>
                <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
                {allColumns.map((column) => (
                  <div key={column.id}>
                    <Checkbox {...column.getToggleHiddenProps()} label={column.id} />
                  </div>
                ))}
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <table
        {...getTableProps()}
        className='w-full text-sm text-left text-gray-500 dark:text-gray-400'
      >
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className='py-3 px-6'>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.slice(0, 10).map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className='py-4 px-6'>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal opened={opened} onClose={() => setOpened(false)} title='Thêm Cửa hàng VanlangGO'>
        <AddStore setForm={setForm} />
      </Modal>
    </div>
  );
}
