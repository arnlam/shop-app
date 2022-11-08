import { SelectedItem } from '../../types/basket';
import { usePicture } from '../hooks/usePicture';
import { useUpdateBasket } from '../hooks/useUpdateBasket';

const BasketItem = (item: SelectedItem) => {
  const updateBasket = useUpdateBasket();
  const increment = () => updateBasket.mutate({ [item.id]: item.amount + 1 });
  const decrease = () => updateBasket.mutate({ [item.id]: item.amount - 1 });
  const { data } = usePicture(item.picturePath, item.id);

  return (
    <div key={item.id} className="flex flex-row space-x-3">
      <img
        className="object-cover w-full h-full aspect-square rounded"
        src={data}
        alt={item.name}
      />
      <div className="flex flex-col">
        <span className="font-medium">{item.name}</span>
        <span>{item.price} €</span>
        <span className="flex space-x-3">
          <span>Quantité</span>
          <span>{item.amount}</span>
          <button
            type="button"
            onClick={decrease}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-3 py-1 mr-2 mb-2"
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-3 py-1 mr-2 mb-2"
          >
            +
          </button>
        </span>
      </div>
    </div>
  );
};

export default BasketItem;
