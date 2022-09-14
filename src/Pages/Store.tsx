import { Badge } from '@mantine/core';
import { TableCustom } from '~/components/Store';

const data = [
  {
    _id: 'storeId1',
    name: 'Cơm gà xối mỡ chị 7',
    slug: 'com-ga-xoi-mo-chi-7',
    desc: 'Đây là cửa hàng lâu đời với món ...',
    phone: '09888888888',
    images: [
      {
        _id: 'imageId1',
        name: 'Image1',
        src: 'https://img1.png',
        type: 'png',
        updatedAt: null,
        createdAt: '2022-09-03T09:17:54.759Z',
        createdBy: 'hau2803nch@gmail.com',
        updatedBy: null,
        status: 'ACTIVE',
      },
    ],
    location: {
      lat: '41.40338',
      long: '2.17403',
      address: '120 Dương Quảng Hàm',
    },
    categories: ['categoryId1', 'categoryId3', 'categoryId3'],
    products: ['productId1', 'productId2'],
    vi: 'storeId1',
    priceShipKm: 10,
    updatedAt: null,
    createdAt: '2022-09-03T09:17:54.759Z',
    createdBy: 'hau2803nch@gmail.com',
    updatedBy: null,
    status: true,
  },
  {
    _id: 'storeId1',
    name: 'Cơm gà xối mỡ chị 7',
    slug: 'com-ga-xoi-mo-chi-7',
    desc: 'Đây là cửa hàng lâu đời với món ...',
    phone: '09888888888',
    images: [
      {
        _id: 'imageId1',
        name: 'Image1',
        src: 'https://img1.png',
        type: 'png',
        updatedAt: null,
        createdAt: '2022-09-03T09:17:54.759Z',
        createdBy: 'hau2803nch@gmail.com',
        updatedBy: null,
        status: 'ACTIVE',
      },
    ],
    location: {
      lat: '41.40338',
      long: '2.17403',
      address: '120 Dương Quảng Hàm',
    },
    categories: ['categoryId1', 'categoryId3', 'categoryId3'],
    products: ['productId1', 'productId2'],
    vi: 'storeId1',
    priceShipKm: 10,
    updatedAt: null,
    createdAt: '2022-09-03T09:17:54.759Z',
    createdBy: 'hau2803nch@gmail.com',
    updatedBy: null,
    status: false,
  },
  {
    _id: 'storeId1',
    name: 'Cơm gà xối mỡ chị 7',
    slug: 'com-ga-xoi-mo-chi-7',
    desc: 'Đây là cửa hàng lâu đời với món ...',
    phone: '09888888888',
    images: [
      {
        _id: 'imageId1',
        name: 'Image1',
        src: 'https://img1.png',
        type: 'png',
        updatedAt: null,
        createdAt: '2022-09-03T09:17:54.759Z',
        createdBy: 'hau2803nch@gmail.com',
        updatedBy: null,
        status: 'ACTIVE',
      },
    ],
    location: {
      lat: '41.40338',
      long: '2.17403',
      address: '120 Dương Quảng Hàm',
    },
    categories: ['categoryId1', 'categoryId3', 'categoryId3'],
    products: ['productId1', 'productId2'],
    vi: 'storeId1',
    priceShipKm: 10,
    updatedAt: null,
    createdAt: '2022-09-03T09:17:54.759Z',
    createdBy: 'hau2803nch@gmail.com',
    updatedBy: null,
    status: true,
  },
];

const columns = [
  {
    Header: 'Dd',
    accessor: '_id',
  },
  {
    Header: 'Tên cửa hàng',
    accessor: 'name',
  },
  {
    Header: 'Đường dẫn',
    accessor: 'slug',
  },
  {
    Header: 'Điện thoại',
    accessor: 'phone',
  },
  {
    Header: 'Địa chỉ',
    accessor: 'location.address',
  },
  {
    Header: 'Trạng thái',
    accessor: 'status',
    Cell: ({ value }: any) => {
      return value ? (
        <Badge color='green'>Hoạt động</Badge>
      ) : (
        <Badge color='red'>Ngừng hoạt động</Badge>
      );
    },
  },
  {
    Header: 'Được tạo bởi',
    accessor: 'createdBy',
  },
  {
    Header: 'Đã tạo lúc',
    accessor: 'createdAt',
  },
];
export function Store() {
  return (
    <div>
      {/* <Table data={data} columns={columns} /> */}
      <TableCustom data={data} />
    </div>
  );
}
