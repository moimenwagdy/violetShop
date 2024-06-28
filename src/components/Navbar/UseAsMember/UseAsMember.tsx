import { motion } from "framer-motion";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Store/reduxHooks.tsx/hooks";
import { authorizationAction } from "../../../Store/StoreSlices/authorizationSlice/authorization";
import authorize from "../../../utilities/authorize";
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
  };

  return (
    <>
      {!isLoggedIn && (
        <motion.button
          onClick={fakeLogin}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 5 }}
          initial="hidden"
          animate="visible"
          className="absolute -bottom-16 left-[2%]  px-4 py-1 rounded-md bg-subColor_4 text-white hover:bg-white hover:text-subColor_4">
          use as a member
        </motion.button>
      )}
    </>
  );
};

export default UseAsMember;
