import { Badge } from '@mantine/core';
import * as React from 'react';
const data = [
  {
    _id: 'productId1',
    vi: 'productInfoId1',
    viSlug: 'com-ga-xoi-mo-chi-7',
    viName: 'Com ga xoi mo chi 7',
    viStatus: 'ACTIVE',
    images: [
      {
        _id: 'imageId1',
        name: 'Image1',
        src: 'https://img1.png',
        type: 'png',
      },
    ],
    productSubs: ['productId1', 'productId2'],
    category: 'categoryId1',
    store: 'storeId1',
    createdTime: '2022-09-03T09:17:54.759Z',
    startTime: '2022-09-03T09:17:54.759Z',
    endTime: '2022-09-03T09:17:54.759Z',
    salePromotion: 'salePromotionId1',
    point: 3,
    updatedAt: null,
    createdAt: '2022-09-03T09:17:54.759Z',
    createdBy: 'hau2803nch@gmail.com',
    updatedBy: null,
    status: 'ACTIVE',
  },
  {
    _id: 'productId1',
    vi: 'productInfoId1',
    viSlug: 'com-ga-xoi-mo-chi-7',
    viName: 'Com ga xoi mo chi 7',
    viStatus: 'ACTIVE',
    images: [
      {
        _id: 'imageId1',
        name: 'Image1',
        src: 'https://img1.png',
        type: 'png',
      },
    ],
    productSubs: ['productId1', 'productId2'],
    category: 'categoryId1',
    store: 'storeId1',
    createdTime: '2022-09-03T09:17:54.759Z',
    startTime: '2022-09-03T09:17:54.759Z',
    endTime: '2022-09-03T09:17:54.759Z',
    salePromotion: 'salePromotionId1',
    point: 3,
    updatedAt: null,
    createdAt: '2022-09-03T09:17:54.759Z',
    createdBy: 'hau2803nch@gmail.com',
    updatedBy: null,
    status: 'NOT_ACTIVE',
  },
];

const columns = [
  { name: '_id', hidden: true },
  {
    name: 'viName',
    label: 'Tên sản phẩm',
  },
  {
    name: 'store',
    label: 'Cửa hàng',
  },
  {
    name: 'category',
    label: 'Danh mục',
  },
  {
    name: 'status',
    label: 'Trạng thái',
    render: ({ value }: { value: any }) => {
      return (
        <>
          <Badge color={value === 'ACTIVE' ? 'green' : 'red'}>
            {value === 'ACTIVE' ? 'Hoạt động' : 'Không hoạt động'}
          </Badge>
        </>
      );
    },
  },
  {
    name: 'createdBy',
    label: 'Tạo bởi',
  },
  {
    name: 'createdAt',
    label: 'Tạo lúc',
  },
];

export function Product() {
  return <>Product</>;
}
