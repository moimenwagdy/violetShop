import { Container } from "../../../../Container/Container";
import HomeCategoryCardItem from "./HomeCategoryCardItem";

const HomeCategoiesCards = () => {
  return (
    <Container>
      <main className="w-[80%] sm:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
        <HomeCategoryCardItem
          category="smartphones"
          title="Smart Phones"
          src="mobile-phones.jpeg"
        />
        <HomeCategoryCardItem
          category="furniture"
          title="Furniture"
          src="furniture.jpg"
        />
        <HomeCategoryCardItem
          category="sunglasses"
          title="Sun glasses"
          src="sunglasses.jpg"
        />
        <HomeCategoryCardItem
          category="beauty"
          title="Beauty"
          src="Beauty.jpg"
        />
        <HomeCategoryCardItem
          category="womens-shoes"
          title="Women stuff"
          src="womenshoes.jpg"
        />
        <HomeCategoryCardItem
          category="mens-watches"
          title="Watches"
          src="watches.jpeg"
        />
      </main>
    </Container>
  );
};
export default HomeCategoiesCards;
