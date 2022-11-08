import { useMemo, useState } from 'react';
import { SelectedItem } from '../../types/basket';
import { useBasket } from '../hooks/useBasket';
import { BasketItemSkeleton } from './skeleton/BasketItemSkeleton';
import useListProducts from '../hooks/useListProduct';
import BasketItem from './BasketItem';
import { findSelectedItemInList } from '../utils/findSelectedItem';

const ListBasket = () => {
  const { isSuccess, isLoading, isError, error, data, refetch } = useBasket();
  const { isSuccess: isSuccessListProducts, data: dataListProducts = [] } =
    useListProducts();
  // Avoid displaying basket before filtering selected Items
  const [loadingBasket, setLoadingBasket] = useState(true);

  const selectedItems = useMemo(() => {
    let selectedItems: SelectedItem[] = [];
    if (isSuccess && isSuccessListProducts) {
      // retrieve product properties in cache from selected id and return as an array after filtering
      selectedItems = findSelectedItemInList(data, dataListProducts);
      setLoadingBasket(false);
    }
    return selectedItems;
  }, [data, dataListProducts, isSuccess, isSuccessListProducts]);

  const handleRefetch = () => refetch();

  return (
    <nav>
      <div className="sticky top-4 block p-6 mx-4 max-w-sm bg-white rounded border border-gray-200 shadow-md hover:bg-gray-100">
        <h2 className="font-bold">Votre panier</h2>
        <div className="flex flex-col mt-3 space-y-5">
          {isSuccess &&
            !loadingBasket &&
            selectedItems.length > 0 &&
            selectedItems.map((item) => <BasketItem {...item} key={item.id} />)}
          {isSuccess && !loadingBasket && selectedItems.length === 0 && (
            <p>Panier vide</p>
          )}
          {(isLoading || loadingBasket) && <BasketItemSkeleton />}
          {/* // Refetch button after retries */}
          {isError && (
            <div>
              {error.message}
              <button
                name="refetch"
                className="border border-gray-300"
                type="button"
                onClick={handleRefetch}
              >
                Réessayer
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ListBasket;
