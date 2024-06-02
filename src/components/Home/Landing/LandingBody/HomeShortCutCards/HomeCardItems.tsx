import { Container } from "../../../../Container/Container";
import HomeCardItem from "./HomeCardItem";

const HomeCard = () => {
  return (
    <Container>
      <main className="flex flex-col justify-center items-center gap-y-2 flex-wrap sm:w-[520px] sm:mx-auto sm:flex-row sm:justify-start sm:gap-x-1 md:w-[780px] lg:w-full  ">
        <HomeCardItem title="Smart Phones" src="mobile-phones.jpeg" />
        <HomeCardItem title="Furniture" src="furniture.jpg" />
        <HomeCardItem title="Sun glasses" src="sunglasses.jpg" />
        <HomeCardItem title="Beauty" src="Beauty.jpg" />
        <HomeCardItem title="Women stuff" src="womenshoes.jpg" />
      </main>
    </Container>
  );
};
export default HomeCard;
