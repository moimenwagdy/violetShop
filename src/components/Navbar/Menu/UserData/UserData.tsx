import { AnimatePresence, motion } from "framer-motion";
import { authorizationAction } from "../../../../Store/StoreSlices/authorizationSlice/authorization";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Store/reduxHooks.tsx/hooks";
import { cartSliceAction } from "../../../../Store/StoreSlices/CartSlice/CartSlice";

const UserData = () => {
  const loggedIn = useAppSelector((state) => state.authorization.loggedIn);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authorization.responseData);
  const logOut = () => {
    dispatch(authorizationAction.setLoggedIn(false));
    dispatch(
      authorizationAction.setResponseData({
        email: "",
        id: "",
        name: "",
        token: "",
      })
    );
    dispatch(cartSliceAction.clearCart());
  };
  return (
    <AnimatePresence>
      {loggedIn && (
        <motion.aside
          className="min-h-6"
          variants={{
            initial: { x: -100, opacity: 0 },
            move: { x: 0, opacity: 1 },
          }}
          initial="initial"
          animate="move"
          exit="move">
          <div>
            <h4 className="">
              <span className="text-xs">you logged in as</span> {user.name}
            </h4>
            <p className="text-sm">{user.email}</p>
          </div>
          <button className="mt-4" onClick={logOut}>
            logout
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default UserData;
