import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Basket } from '../../types/basket';
import { apiKey, userId } from '../config';

const fetchOptions = {
  url: `/dev/basket/${userId}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  },
};

const fetchBasket = async (): Promise<Basket> => {
  const res = await axios(fetchOptions);
  const data: Basket = res.data.data.products;
  return data;
};

export const useBasket = () =>
  useQuery<Basket, AxiosError>(['basket'], () => fetchBasket());
