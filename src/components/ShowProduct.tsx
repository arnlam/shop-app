import { Product } from '../../types/product';
import { useUpdateBasket } from '../hooks/useUpdateBasket';
import { usePicture } from '../hooks/usePicture';
import { ImageSkeleton } from './skeleton/ImageSkeleton';

const ShowProduct = ({
  product_name: productName,
  picture_path: picturePath,
  product_desc: productDesc,
  product_price: productPrice,
  product_id: productId,
}: Product) => {
  const { data } = usePicture(picturePath, productId);

  const updateBasket = useUpdateBasket();
  const addProduct = () => updateBasket.mutate({ [productId]: 1 });

  return (
    <div className="relative group/image">
      {data ? (
        <img
          className="object-cover w-full h-full"
          src={data}
          alt={productName}
        />
      ) : (
        <ImageSkeleton />
      )}
      <div
        role="tooltip"
        className="absolute flex flex-col bottom-0 bg-white m-3 p-5 opacity-0  transition-opacity duration-700 group-hover/image:opacity-100 rounded"
      >
        <p className="font-extrabold">{productName}</p>
        <p className="font-bold text-slate-500">{productPrice} €</p>
        <p>{productDesc}</p>
        <button
          type="button"
          onClick={addProduct}
          className="flex self-end mt-3 space-x-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-3 py-1"
        >
          Acheter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default ShowProduct;
