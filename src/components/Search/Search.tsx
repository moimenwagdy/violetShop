import { useEffect } from "react";
import { useAppDispatch } from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/StoreSlices/productsSlice/slice";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import TopSearched from "./TopSearched";

const Search = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsAction.searchProduct("......."));
  }, []);

  return (
    <main className="min-h-screen container mx-auto flex flex-col items-center gap-y-10">
      <SearchForm />
      <SearchResults />
      <TopSearched />
    </main>
  );
};

export default Search;
