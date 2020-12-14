import { ReactNode } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuthStore } from "../utils/store/authstore";

interface Props extends RouteProps {
  children: ReactNode;
}

export const PrivateRoute = (props: Props) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  if (isAuth) {
    return <Route {...props}>{props.children}</Route>;
  } else {
    return <Redirect to="/" />;
  }
};
