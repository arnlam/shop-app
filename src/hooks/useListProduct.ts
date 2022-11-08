import { useQuery } from '@tanstack/react-query';
import { apiKey } from '../config';
import { Product } from '../../types/product';
import axios, { AxiosError } from 'axios';

const fetchOptions = {
  url: '/dev/products',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  },
  data: {
    data: {
      products: [],
    },
  },
};

const fetchListProduct = async () => {
  const res = await axios(fetchOptions);
  console.log(res);
  const data = res.data.data.products;
  return data;
};

const useListProducts = () => {
  return useQuery<Product[], AxiosError>(['products'], () =>
    fetchListProduct()
  );
};

export default useListProducts;
