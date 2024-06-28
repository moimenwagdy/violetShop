import { useNavigate } from "react-router";
import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const isDark = useAppSelector((state) => state.darkMoodSlice.isDark);
  const navigateToHome = () => {
    navigate("/");
  };

  return (
      <img
        onClick={navigateToHome}
        src={`../../images/${isDark ? "lightLogo" : "darkLogo"}.png`}
        className="rounded-xl max-h-[70%] cursor-pointer"
        alt="Logo"
      />
  );
};

export default Logo;
