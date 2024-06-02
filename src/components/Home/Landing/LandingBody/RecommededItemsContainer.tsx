import SliderItems from "./SliderItems";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SliderButtons from "./SliderButtons";

const RecommededItemsContainer = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-center text-lightViolet">Hight Rated Items</h2>
      <section className="w-full flex justify-around items-center">
        <SliderButtons icon={faChevronLeft} x={1} />
        <SliderItems />
        <SliderButtons icon={faChevronRight} x={-1} />
      </section>
    </div>
  );
};

export default RecommededItemsContainer;
