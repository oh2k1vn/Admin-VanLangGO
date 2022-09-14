import * as React from 'react';
import { Checkbox } from '@mantine/core';

export interface ITableCustomProps {
  data: any[];
}

export function TableCustom({ data }: ITableCustomProps) {
  const [isChecked, setIsChecked] = React.useState([]);

  const handleCheckBox = (e: any) => {
    const { value, checked } = e.target;

    if (checked) {
      setIsChecked([...isChecked], value);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }
  };

  const handleDelete = () => {
    console.log(isChecked);
  };
  return (
    <>
      <button onClick={() => handleDelete()}>Xoa all</button>
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <Checkbox
                    id='checkbox-all'
                    className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                </div>
              </th>
              <th scope='col' className='py-3 px-6'>
                Product name
              </th>
              <th scope='col' className='py-3 px-6'>
                Color
              </th>
              <th scope='col' className='py-3 px-6'>
                Category
              </th>
              <th scope='col' className='py-3 px-6'>
                Price
              </th>
              <th scope='col' className='py-3 px-6'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  key={index}
                >
                  <td className='p-4 w-4'>
                    <div className='flex items-center'>
                      <Checkbox
                        value={index}
                        checked={item.isChecked}
                        onChange={(e) => handleCheckBox(e)}
                        id='checkbox-table-1'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </div>
                  </td>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {item.name}
                  </th>
                  <td className='py-4 px-6'>{item.phone}</td>
                  <td className='py-4 px-6'>{item.location.address}</td>
                  <td className='py-4 px-6'>{item.desc}</td>
                  <td className='py-4 px-6'>
                    <a
                      href='#'
                      className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
