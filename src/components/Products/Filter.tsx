import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getCategories } from "./functions/getCategories";
import Button from "../Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../Store/StoreSlices/productsSlice/slice";
import { useRef } from "react";
import { motion } from "framer-motion";

const Filter = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const filterOffset = useAppSelector((state) => state.productsSlice.offset);
  const { data, isSuccess }: UseQueryResult<string[], Error> = useQuery<
    string[]
  >({
    queryKey: ["filter"],
    queryFn: getCategories,
    staleTime: 600000,
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
    dispatch(productsAction.setFilterIsOpen(false));
    const isNotEmpty = filterArr.length !== 0;
    isNotEmpty && dispatch(productsAction.setIsFiltring(true));
  };
  const ResetFilter = () => {
    dispatch(productsAction.setFilterValues(""));
    formRef.current?.reset();
    dispatch(productsAction.increaseOffsetBy(-filterOffset + 12));
    dispatch(productsAction.setIsFiltring(false));
  };
  const closeFilter = () => {
    dispatch(productsAction.setFilterIsOpen(false));
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { stiffness: 75 } },
      }}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10 }}
      id="filters"
      className="absolute sm:fixed z-[5] left-[2%] top-2 sm:top-[14%] w-[96%] ring-1 ring-black dark:ring-white p-4 bg-white dark:bg-stone-700 dark:text-white font-handWrite shadow-md rounded-lg flex justify-between">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="filter-form"
        className="w-full flex flex-col gap-y-2 sm:flex-row gap-x-2 justify-around">
        <fieldset className="filter-group flex flex-wrap justify-start w-full sm:w3/4">
          <legend className="font-semibold">Categories</legend>
          {isSuccess &&
            data.map((e) => {
              return (
                <label
                  key={e}
                  className="w-1/2 sm:w-44 flex items-center space-x-2">
                  <input type="checkbox" name="category" value={e} />
                  <span className="text-sm">{e}</span>
                </label>
              );
            })}
        </fieldset>
        <div className="flex flex-col justify-center items-center gap-y-4 font-handWrite">
          <button
            type="submit"
            className=" px-3 text-center bg-lightestViolet text-white py-2 rounded-md">
            Apply Filters
          </button>
          <span className="flex gap-x-1">
            <Button
              variants="redButtonFree"
              additionalStyles="ms-0 translate-x-0"
              title="Reset"
              onClick={ResetFilter}
            />
            <Button
              variants="redButtonFree"
              additionalStyles="ms-0 translate-x-0"
              title="Close"
              onClick={closeFilter}
            />
          </span>
        </div>
      </form>
    </motion.div>
  );
};

export default Filter;
