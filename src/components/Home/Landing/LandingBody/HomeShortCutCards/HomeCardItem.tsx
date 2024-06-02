const HomeCardItem: React.FC<{ title: string; src?: string }> = ({
  title,
  src,
}) => {
  return (
    <section className="h-32 min-w-60 max-w-64 bg-subColor_4/20 flex justify-around py-2 px-2 gap-x-2 rounded-xl">
      <div className="flex justify-center relative">
        <h1 className="absolute w-60 top-[50%] -translate-y-1/2  text-center rounded text-3xl font-handWrite text-white font-extrabold">
          {title}
        </h1>
        <img
          className="max-w-full rounded-xl"
          src={`../../../../../images/${src}`}
        />
      </div>
    </section>
  );
};

export default HomeCardItem;
