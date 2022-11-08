import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPicture = async (picturePath: string) => {
  // API requires to get data with 'image/jpeg' header
  const { data } = await axios({
    url: `/dev${picturePath}`,
    method: 'GET',
    headers: {
      Accept: 'image/jpeg',
    },
    responseType: 'blob',
  });
  const blobObjectUrl = URL.createObjectURL(data);
  return blobObjectUrl;
};
export const usePicture = (picturePath: string, productId: string) =>
  useQuery(['picture', productId], () => fetchPicture(picturePath));
