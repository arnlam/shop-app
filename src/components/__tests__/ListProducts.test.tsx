import 'whatwg-fetch';
import { render } from '@testing-library/react';
import ListProduct from '../ListProducts';
import useListProducts from '../../hooks/useListProduct';
import { usePicture } from '../../hooks/usePicture';

jest.mock('../../hooks/useListProduct');
jest.mock('../../hooks/usePicture');
jest.mock('../../hooks/useUpdateBasket');

test('renders ListProduct', async () => {
  (useListProducts as jest.Mock).mockReturnValue({
    isSuccess: true,
    data: [
      {
        product_name: 'test_name',
        product_id: 'test_id',
        product_desc: 'desc',
        product_price: 10,
        picture_path: 'url',
      },
    ],
  });
  (usePicture as jest.Mock).mockReturnValue({});
  const { getByText } = render(<ListProduct />);
  expect(getByText(/test_name/i)).toBeInTheDocument();
  expect(getByText(/10 €/i)).toBeInTheDocument();
});
