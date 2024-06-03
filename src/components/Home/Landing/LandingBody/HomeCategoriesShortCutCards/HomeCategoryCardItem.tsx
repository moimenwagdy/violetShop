import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../Store/reduxHooks.tsx/hooks";
import { productsAction } from "../../../../../Store/productsSlice/slice";

const HomeCategoryCardItem: React.FC<{
  title: string;
  src?: string;
  category: string;
}> = ({ title, src, category }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToCategoryItems = () => {
    dispatch(productsAction.setFilterValues(category));
    navigate(`/products`);
    dispatch(productsAction.setIsFiltring(true));
  };

  return (
    <motion.section
      onClick={navigateToCategoryItems}
      className="grayscale-[50%] hover:grayscale-0 hover:scale-[1.02] cursor-pointer group h-fit max-w-fit bg-similightViolet/50 flex justify-around p-1 gap-x-2 rounded-xl">
      <div className="group flex justify-center items-center relative">
        <h1 className="absolute  text-center rounded text-3xl sm:text-xl font-basicf text-white font-extrabold">
          {title}
        </h1>
        <img
          className="max-w-50 rounded-xl"
          src={`../../../../../images/${src}`}
        />
      </div>
    </motion.section>
  );
};

export default HomeCategoryCardItem;
