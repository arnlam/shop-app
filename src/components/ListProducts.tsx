import useListProducts from '../hooks/useListProduct';
import ShowProduct from './ShowProduct';
import { ImageSkeleton } from './skeleton/ImageSkeleton';
import styles from '../styles/ListProduct.module.css';

const ListProduct = () => {
  const {
    isSuccess,
    isLoading,
    isError,
    error,
    refetch,
    data = [],
  } = useListProducts();
  const handleRefetch = () => refetch();

  return (
    <div className={`${styles.productsContainer} col-span-4`}>
      {isSuccess ? (
        <>
          {data.map((product) => (
            <ShowProduct {...product} key={product.product_id} />
          ))}
        </>
      ) : isLoading ? (
        // Populate with skeleton placeholder
        Array.from(Array(10).keys()).map((a) => <ImageSkeleton key={a} />)
      ) : isError ? (
        // Refetch button after retries
        <div>
          {error.message}
          <button
            className="border border-gray-300"
            type="button"
            onClick={handleRefetch}
          >
            Réessayer
          </button>
        </div>
      ) : (
        'null'
      )}
    </div>
  );
};

export default ListProduct;
