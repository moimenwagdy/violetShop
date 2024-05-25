import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getCategories } from "./functions/getCategories";
import Button from "../Button";
import { useAppDispatch } from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/productsSlice/slice";

const Filter = () => {
  const dispatch = useAppDispatch();

  const { data, isSuccess }: UseQueryResult<string[], Error> = useQuery<
    string[]
  >({
    queryKey: ["filter"],
    queryFn: getCategories,
  });
  isSuccess && console.log(data);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const filterArr = [];
    for (const [_, value] of formData.entries()) {
      filterArr.push(value);
    }
    dispatch(productsAction.setFilterValues(filterArr));
  };
  return (
    <div
      id="filters"
      className="my-2 ring-1 ring-lightViolet filter-container p-4 bg-white shadow-md rounded-lg flex justify-center">
      <form
        onSubmit={handleSubmit}
        id="filter-form"
        className="w-full flex gap-x-2 justify-between">
        <fieldset className="filter-group flex flex-wrap">
          <legend className="font-semibold">Category</legend>
          {isSuccess &&
            data.map((e) => {
              return (
                <label key={e} className="w-44 flex items-center space-x-2">
                  <input type="checkbox" name="category" value={e} />
                  <span className="text-sm">{e}</span>
                </label>
              );
            })}
        </fieldset>
        <button type="submit">Apply Filters</button>
        <Button title="close" />
      </form>
    </div>
  );
};

export default Filter;
