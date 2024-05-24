import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";

const Logo: React.FC = () => {
  const isDark = useAppSelector((state) => state.darkMoodSlice.isDark);
  return (
    <img
      src={`../../../src/components/navbar/images/${
        isDark ? "lightLogo" : "darkLogo"
      }.png`}
      className="rounded-xl max-h-[70%] "
      alt="fsdfs"
    />
  );
};

export default Logo;
