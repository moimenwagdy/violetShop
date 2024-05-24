import { AnimatePresence, motion } from "framer-motion";
import { authorizationAction } from "../../../../Store/authorizationSlice/authorization";
import { useAppDispatch, useAppSelector } from "../../../../Store/reduxHooks.tsx/hooks";

const UserData = () => {
  const loggedIn = useAppSelector((state) => state.authorization.loggedIn);
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(authorizationAction.setLoggedIn(false));
  };
  return (
    <AnimatePresence>
      {loggedIn && (
        <motion.aside
          variants={{ initial: { x: -100, opacity: 0 }, move: { x: 0, opacity: 1 } }}
          initial="initial"
          animate="move"
          exit="move">
          <button onClick={logOut}>logout</button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default UserData;
