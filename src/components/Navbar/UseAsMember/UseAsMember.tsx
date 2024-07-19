import { motion } from "framer-motion";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import { authorizationAction } from "../../../Store/StoreSlices/authorizationSlice/authorization";
import authorize from "../../../utilities/authorize";
import { getAPICartItems } from "../../../Store/StoreSlices/CartSlice/CartSlice";
const email = import.meta.env.VITE_FAKE_LOGIN_EMAIL;
const password = import.meta.env.VITE_FAKE_LOGIN_PASSWORD;
const UseAsMember = () => {
  const isLoggedIn = useAppSelector((state) => state.authorization.loggedIn);
  const dispatch = useAppDispatch();
  const fakeLogin = async () => {
    const auth = await authorize("login", email, password);
    console.log(auth);
    dispatch(authorizationAction.setLoggedIn(true));
    dispatch(authorizationAction.setResponseData(auth));
    dispatch(getAPICartItems(auth.id));
  };

  return (
    <>
      {!isLoggedIn && (
        <motion.button
          onClick={fakeLogin}
          variants={{
            initial: { x: -100, opacity: 0 },
            move: { x: 0, opacity: 1 },
          }}
          initial="initial"
          animate="move"
          className=" px-4 py-1 rounded-md bg-subColor_4 text-white hover:bg-white hover:text-subColor_4">
          use as a Viewer
        </motion.button>
      )}
    </>
  );
};

export default UseAsMember;
