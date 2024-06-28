import { useEffect } from "react";
import { NavFormInput } from "./NavFormInput";
import useNavForm from "./FormCustomHook/useNavForm";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Store/reduxHooks.tsx/hooks";
import { authorizationAction } from "../../../../Store/StoreSlices/authorizationSlice/authorization";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../../MultiStyledButton/Button";

const NavForm = () => {
  const {
    passwordConfirming,
    passwordConflict,
    errorTitle,
    handleChange,
    handleSubmit,
    formRef,
    isSignUp,
    isError,
    isSuccess,
    data,
    isPending,
    formTarget,
  } = useNavForm();
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((state) => state.authorization.loggedIn);
 
  useEffect(() => {
    if (!isSignUp && isSuccess) {
      dispatch(authorizationAction.setResponseData(data!));
      dispatch(authorizationAction.setLoggedIn(true));
    }
  }, [isSignUp, isSuccess]);

  return (
    <AnimatePresence>
      {!loggedIn && (
        <>
          <motion.form
            onSubmit={handleSubmit}
            ref={formRef}
            className={`${isSignUp ? "space-y-1" : "space-y-2 mt-3"} `}
            variants={{
              initial: { x: -100, opacity: 0 },
              move: { x: 0, opacity: 1 },
            }}
            initial="initial"
            animate="move"
            exit="initial">
            {isSignUp && (
              <NavFormInput
                title="Name"
                type="text"
                id="name"
                name="name"
                placeHolder="name"
                onChange={handleChange}
                isSignUp={isSignUp}
              />
            )}
            <NavFormInput
              title="Email"
              name="email"
              type="text"
              id="email"
              placeHolder="Login"
              onChange={handleChange}
              isSignUp={isSignUp}
            />
            <NavFormInput
              title="Password"
              type="password"
              name="password"
              id="password"
              conflict={passwordConflict}
              placeHolder="enter your password"
              onChange={handleChange}
              isSignUp={isSignUp}
              passwordConfirming={passwordConfirming}
            />
            {isSignUp && (
              <NavFormInput
                title="Password Confirm"
                name="passwordConfirm"
                type="password"
                conflict={passwordConflict}
                id="passwordConfirm"
                placeHolder="enter your password again"
                onChange={handleChange}
                isSignUp={isSignUp}
                passwordConfirming={passwordConfirming}
              />
            )}
            {isError && (
              <p className="text-xs text-subColor_3 font-basic">{errorTitle}</p>
            )}
            <Button
              title={!isPending ? (isSignUp ? "signUp" : "Login") : "submittig"}
              variants="basic"
            />
          </motion.form>
          <motion.button
            variants={{
              initial: { x: 100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
            }}
            animate="animate"
            initial="initial"
            exit="initial"
            onClick={formTarget}
            className="text-lg mt-4 w-full mx-1">
            {isSignUp ? "Have An Account" : "Create New Account"}
          </motion.button>
        </>
      )}
     
    </AnimatePresence>
  );
};

export default NavForm;
