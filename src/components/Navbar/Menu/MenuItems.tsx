import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import siteMapSlice from "../../../Store/StoreSlices/siteMapSlice/siteMapSlice";
import { MenuItem } from "./MenuItem";
import HeaderMenuItem from "./MenuHeader/HeaderMenuItem";
import MenuContainer from "./MenuContainer";
import NavForm from "./NavForm/NavForm";
import { authorizationAction } from "../../../Store/StoreSlices/authorizationSlice/authorization";
import UserData from "./UserData/UserData";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../MultiStyledButton/Button";
import DarkLightMood from "./DarkLightMood/DarkLightMood";
import UseAsMember from "../UseAsMember/UseAsMember";

const MenuItems = () => {
  const signedUp = useAppSelector((state) => state.authorization.signedUp);
  const dispatch = useAppDispatch();
  const closeSiteMap = () => {
    dispatch(siteMapSlice.actions.closeMap());
    dispatch(authorizationAction.setToLogin());
  };

  return (
    <MenuContainer>
      <HeaderMenuItem onClick={closeSiteMap} />
      <MenuItem title="home" target="" />
      <MenuItem title="Products" target="products" />
      <MenuItem title="Cart" target="cart" />
      <MenuItem title="Contact Us" />
      <MenuItem title="Services" />
      <DarkLightMood />
      <motion.li
        className="h-fit border-t py-1 flex flex-col justify-center">
        <UserData />
        <NavForm />
      </motion.li>
      <li className="text-center">
        <UseAsMember />
      </li>
      <li>
        <Button
          variants="redButtonClose"
          title="Close"
          onClick={closeSiteMap}
        />
      </li>
      <li className="absolute left-[50%] -translate-x-[50%]">
        <AnimatePresence>
          {signedUp && (
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate="visible"
              exit="hidd"
              className="text-center text-xs">
              Signed up successfuly
            </motion.p>
          )}
        </AnimatePresence>
      </li>
    </MenuContainer>
  );
};

export default MenuItems;
