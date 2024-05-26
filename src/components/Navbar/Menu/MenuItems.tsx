import { useAppDispatch, useAppSelector } from "../../../Store/reduxHooks.tsx/hooks";
import siteMapSlice from "../../../Store/siteMapSlice/siteMapSlice";
import { MenuItem } from "./MenuItem";
import HeaderMenuItem from "./HeaderMenuItem";
import MenuContainer from "./MenuContainer";
import NavForm from "./NavForm/NavForm";
import { authorizationAction } from "../../../Store/authorizationSlice/authorization";
import UserData from "./UserData/UserData";
import { motion } from "framer-motion";
import Button from "../../Button";

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
      <MenuItem title="Account" />
      <MenuItem title="Products" />
      <MenuItem title="Categories" />
      <MenuItem title="Cart" />
      <MenuItem title="Contact Us" />
      <MenuItem title="Services" />
      <motion.li layout className="h-fit border-t py-1">
        <UserData />
        <NavForm />
      </motion.li>
      <li>
        <Button variants="redButtonClose" title="Close" onClick={closeSiteMap} />
      </li>
      {signedUp && <p className="text-center">Signed up successfuly</p>}
    </MenuContainer>
  );
};

export default MenuItems;
