import SliderItems from "./SliderItems";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SliderButtons from "./SliderButtons";
import product from "../../../../Products/types/Types";
import { useAppSelector } from "../../../../../Store/reduxHooks.tsx/hooks";
import LoadingComponent from "../../../../Loading/Loading";

const SliderContainer: React.FC<{
  id: string;
  items: product[];
  header: string;
}> = ({ id, items, header }) => {
  const isLoading = useAppSelector((state) => state.productsSlice.isLoading);
  return (
    <div className="w-full flex flex-col gap-y-4 drop-shadow-lg">
      <h2 className="text-center text-darkViolet w-full md:w-1/4 bg-gradient-to-r font-handWrite from-slate-300 to-white mx-auto">
        {header}
      </h2>
      <section className="w-full flex justify-evenly items-center">
        <SliderButtons icon={faChevronLeft} x={1} id={id} />
        <SliderItems items={items!} id={id} />
        <SliderButtons icon={faChevronRight} x={-1} id={id} />
      </section>
      {isLoading && (
        <span className="self-center">
          <LoadingComponent />
        </span>
      )}
    </div>
  );
};

export default SliderContainer;
