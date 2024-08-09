import { useAppSelector } from "../../Store/reduxHooks.tsx/hooks";
import ProductCard from "../Products/ProductCard";

const SearchResults = () => {
  const results = useAppSelector((state) => state.productsSlice.searchResult);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {results.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </section>
  );
};

export default SearchResults;
