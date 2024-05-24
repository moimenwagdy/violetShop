import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import siteMapSlice from "../../../Store/siteMapSlice/siteMapSlice";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuIcon = () => {
  const isOpen = useAppSelector((state) => state.siteMapSlice.isOpen);
  const dispatch = useAppDispatch();
  const openSiteMap = () => {
    dispatch(siteMapSlice.actions.openMap());
  };

  return (
    <button onClick={openSiteMap}>
      <FontAwesomeIcon
        icon={faBars}
        className={`${
          isOpen
            ? "rotate-90 transition-transform duration-100"
            : "rotate-0 transition-transform duration-100"
        } text-white text-4xl`}
      />
    </button>
  );
};

export default MenuIcon;
