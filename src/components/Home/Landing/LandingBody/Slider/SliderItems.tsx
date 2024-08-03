import ProductCard from "../../../../Products/ProductCard";
import product from "../../../../Products/types/Types";

const SliderItems: React.FC<{ items: product[]; id: string }> = ({
  id,
  items,
}) => {
  return (
    <section
      id={id}
      className="w-[85%] flex gap-x-1 overflow-x-scroll snap-x mt-4 rounded-xl scrollbar-none ">
      {items.map((item) => {
        return (
          <div key={item.id} className="min-w-64 snap-start">
            <ProductCard product={item} />
          </div>
        );
      })}
    </section>
  );
};
export default SliderItems;
