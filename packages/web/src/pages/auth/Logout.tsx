import { useMutation } from "@apollo/client";
import { useAuthStore } from "../../utils/store/authstore";
import { LOGOUT } from "@airbnb/controller";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

interface Props {}

export const Logout = (props: Props) => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const [redirect, setRedirect] = useState(false);
  const [logout] = useMutation(LOGOUT);
  useEffect(() => {
    logout()
      .then(() => {
        setAuth(false);
        setRedirect(true);
      })
      .catch(() => console.log("failed to log out"));
  }, [logout, setAuth]);
  if (redirect) return <Redirect to="/" />;
  return <div></div>;
};
