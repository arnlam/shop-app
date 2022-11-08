import { findSelectedItemInList } from '../findSelectedItem';

test('findSelectedItemInList should return a list from an object populated with informations from other list', () => {
  expect(findSelectedItemInList(dataObject as any, dataListProduct)).toEqual(
    expected
  );
});

const dataObject = {
  'bc67b120-6c74-4c92-a4db-4e91931e3b94': 0,
  product: null,
  '87d9431a-785a-4b13-a3fb-d148bb3ac049': 2,
  '290fcb3c-b04a-4ac7-84d9-265e174e543d': null,
  '739c03b7-4ecf-43d0-83cb-3d9bdf5a7b13': 1,
};
const dataListProduct = [
  {
    product_name: 'Small Plastic Chips',
    product_id: '87d9431a-785a-4b13-a3fb-d148bb3ac049',
    product_desc:
      'Illo consectetur dolore totam recusandae. Asperiores dolore in numquam omnis minima ut amet. Et unde voluptatem ullam. Porro odit dolore consequatur veritatis ad. Possimus molestias harum ut modi dolores necessitatibus. Fugit vel excepturi et quis.',
    product_price: 58,
    picture_path: '/product/87d9431a-785a-4b13-a3fb-d148bb3ac049/cover_picture',
  },
  {
    product_name: 'Practical Metal Towels',
    product_id: 'bc67b120-6c74-4c92-a4db-4e91931e3b94',
    product_desc:
      'Qui incidunt quasi molestias cumque. Non nulla quibusdam nostrum excepturi eius ea. Dignissimos rem quos suscipit quaerat dicta voluptatem et quia. Vero itaque perspiciatis eveniet et. Molestiae saepe aut ducimus assumenda eum. Odit id libero qui explicabo labore.',
    product_price: 615,
    picture_path: '/product/bc67b120-6c74-4c92-a4db-4e91931e3b94/cover_picture',
  },
  {
    product_name: 'Rustic Plastic Pants',
    product_id: '290fcb3c-b04a-4ac7-84d9-265e174e543d',
    product_desc:
      'Sint quo voluptatem eos. Sed cumque aliquid doloribus quae unde non aut. Et sit quae voluptas quia aut ipsa.',
    product_price: 742,
    picture_path: '/product/290fcb3c-b04a-4ac7-84d9-265e174e543d/cover_picture',
  },
  {
    product_name: 'Practical Frozen Chips',
    product_id: '739c03b7-4ecf-43d0-83cb-3d9bdf5a7b13',
    product_desc:
      'Dolorem ea dolorem saepe qui blanditiis earum et consequatur tenetur. Nam ut doloribus animi numquam porro fuga ut sed. Iusto sint dolorum quisquam consequatur. Sint nam reiciendis enim dignissimos earum ea numquam vero.',
    product_price: 771,
    picture_path: '/product/739c03b7-4ecf-43d0-83cb-3d9bdf5a7b13/cover_picture',
  },
];

const expected = [
  {
    id: '87d9431a-785a-4b13-a3fb-d148bb3ac049',
    amount: 2,
    name: 'Small Plastic Chips',
    price: 58,
    picturePath: '/product/87d9431a-785a-4b13-a3fb-d148bb3ac049/cover_picture',
  },
  {
    id: '739c03b7-4ecf-43d0-83cb-3d9bdf5a7b13',
    amount: 1,
    name: 'Practical Frozen Chips',
    price: 771,
    picturePath: '/product/739c03b7-4ecf-43d0-83cb-3d9bdf5a7b13/cover_picture',
  },
];
