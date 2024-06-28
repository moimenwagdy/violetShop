import {
  IconDefinition,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";
import { useDarkMoodToggler } from "../../../utilities/useDarkMoodToggler";

const DarkLightMood = () => {
  const [icon, setIcon] = useState<IconDefinition>(faMoon);
  const [mood, setMood] = useState<string>("Light Mood");
  const { darkMoodToggler } = useDarkMoodToggler();
  const isDark = useAppSelector((state) => state.darkMoodSlice.isDark);

  useEffect(() => {
    if (isDark) {
      setIcon(faSun);
      setMood("Light Mood");
    } else {
      setIcon(faMoon);
      setMood("Dark Mood");
    }
  }, [isDark]);
  return (
    <li className="bg-lightViolet/50 rounded-md py-1 w-full flex justify-end items-center">
      <span
        onClick={darkMoodToggler}
        className="cursor-pointer flex justify-center items-center space-x-3 pe-3">
        <p className="font-bold">{mood}</p>
        <button>
          <FontAwesomeIcon icon={icon} />
        </button>
      </span>
    </li>
  );
};

export default DarkLightMood;
