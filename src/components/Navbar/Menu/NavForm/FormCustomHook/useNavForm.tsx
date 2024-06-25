import { useState, useEffect, useCallback, useRef } from "react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Store/reduxHooks.tsx/hooks";
import authorize from "../../../../../utilities/authorize";
import { authorizationAction } from "../../../../../Store/StoreSlices/authorizationSlice/authorization";
import { AxiosError } from "axios";
import { getAPICartItems } from "../../../../../Store/StoreSlices/CartSlice/CartSlice";
// import { getAPICartItems } from "../../../../../Store/StoreSlices/CartSlice/CartSlice";

interface ErrorResponse {
  message: string;
  errors: {
    email?: string;
    password?: string;
    credentials?: string;
  };
}

const useNavForm = () => {
  const dispatch = useAppDispatch();
  const target = useAppSelector((state) => state.authorization.target);
  const [passwordConflict, setPasswordConflict] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const isSignUp = target === "signup";
  let errorTitle = "";

  const {
    data,
    mutate,
    isSuccess,
    error,
    isError,
    reset,
    isPending,
  }: UseMutationResult<
    { id: string; email: string; name: string; token: string },
    AxiosError<ErrorResponse>,
    { target: string; email: string; password: string; name: string }
  > = useMutation({
    mutationKey: [target],
    mutationFn: ({ target, email, password, name }) =>
      authorize(target, email, password, name),
  });
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      reset();
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [reset]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      target,
      email: formData.email,
      password: formData.password,
      name: formData.name,
    });
    setFormData({
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    });
    formRef.current?.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      formRef.current?.reset();
      if (!isSignUp) {
        dispatch(authorizationAction.setResponseData(data));
        dispatch(getAPICartItems(data.id));
        ///////
      } else {
        dispatch(authorizationAction.setSignedUp(true));
      }
      dispatch(authorizationAction.setToLogin());
      reset();
    }
    console.log(formData);
  }, [isSuccess, data, dispatch, reset, target, formData]);

  useEffect(() => {
    setPasswordConflict(formData.password !== formData.passwordConfirm);
  }, [formData.passwordConfirm]);

  if (isError && error.response?.status === 401) {
    errorTitle = "Invalid Email";
  } else if (isError && error.response?.status === 422) {
    errorTitle = error.response.data.errors.credentials!;
  }
  if (isError && isSignUp && error.response?.status === 422) {
    errorTitle =
      error.response?.data.errors.email! ||
      error.response?.data.errors.password!;
  }

  const formTarget = () => {
    formRef.current?.reset();
    dispatch(
      authorizationAction.setResponseData({
        email: "",
        name: "",
        token: "",
        id: "",
      })
    );
    setFormData({
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    });
    isSignUp
      ? dispatch(authorizationAction.setToLogin())
      : dispatch(authorizationAction.setToSignup());
  };

  return {
    passwordConfirming: formData.passwordConfirm.length !== 0,
    passwordConflict,
    errorTitle,
    handleChange,
    handleSubmit,
    formRef,
    isSignUp: target === "signup",
    isError,
    isSuccess,
    data,
    target,
    isPending,
    formTarget,
  };
};

export default useNavForm;
