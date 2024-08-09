import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/StoreSlices/productsSlice/slice";

const SearchForm = () => {
  const [input, setInput] = useState<string>();
  const [invaildInput, setInvalidInput] = useState<boolean>(false);
  const [resultsIsZero, setResultsIsZero] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "" || input === undefined) {
      setInvalidInput(true);
      dispatch(productsAction.searchProduct("......."));
      return;
    } else setInvalidInput(false);
    dispatch(productsAction.searchProduct(input));
    setResultsIsZero(true);
  };
  const results = useAppSelector((state) => state.productsSlice.searchResult);
  const emptyArray = results.length === 0;
  const notEmptyArray = results.length > 0;

  useEffect(() => {
    notEmptyArray && setInvalidInput(false);
  }, [results]);

  return (
    <>
      <div className="mt-10">
        <form onSubmit={handleSubmit} className="flex gap-x-2">
          <input
            placeholder="Search products"
            className="focus-visible:outline-none px-4 py-2 rounded-md"
            type="text"
            onInput={handleInput}
          />
          <button
            type="submit"
            className="bg-lightestViolet text-white hover:bg-white hover:text-darkViolet dark:bg-darkViolet dark:text-white px-4 py-1 dark:hover:bg-white dark:hover:text-darkViolet">
            Submit
          </button>
        </form>
        {invaildInput && <p className="text-red-600 text-sm">Invalid entry</p>}
      </div>
      {emptyArray && resultsIsZero && <p>No results</p>}
    </>
  );
};

export default SearchForm;
