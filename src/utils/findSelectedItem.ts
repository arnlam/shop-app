import { Basket, SelectedItem } from '../../types/basket';
import { Product } from '../../types/product';

export const findSelectedItemInList = (
  basketList: Basket,
  dataList: Product[]
) =>
  Object.entries(basketList)
    .filter(([, value]) => !!value)
    .map(([key, value]): SelectedItem => {
      const selectedObject = dataList.find((obj) => obj.product_id === key);
      return {
        id: key,
        amount: value,
        name: selectedObject?.product_name ?? key,
        price: selectedObject?.product_price ?? 0,
        picturePath: selectedObject?.picture_path ?? '',
      };
    });
