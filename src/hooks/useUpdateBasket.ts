import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { apiKey, userId } from '../config';

export const useUpdateBasket = () => {
  const queryClient = useQueryClient();

  const fetchOptions = {
    url: '/dev/basket',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  };
  return useMutation(
    (product: { [id: string]: number }) =>
      axios({
        ...fetchOptions,
        data: JSON.stringify({
          data: {
            user_id: userId,
            products: product,
          },
        }),
      }).then((res) => res.data),
    {
      onMutate: async (product) => {
        await queryClient.cancelQueries(['basket']);

        // Snapshot the previous value
        const previousBasket = queryClient.getQueryData(['basket']);

        // Optimistically update to the new value
        queryClient.setQueryData(['basket'], (old: any) => ({
          ...old,
          ...product,
        }));

        // Return a context object with the snapshotted value
        return { previousBasket };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, newTodo, context) => {
        console.log('error');
        queryClient.setQueryData(['todos'], context!.previousBasket);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(['todos']);
      },
    }
  );
};
