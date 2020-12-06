import { useQuery } from "@apollo/client";
import { USER_DATA } from "@airbnb/controller";
import { useEffect } from "react";
import { User } from "@airbnb/common";
import { useAuthStore } from "../store/authstore";

export const useIsAuth = () => {
  const { data } = useQuery<{ data: User }>(USER_DATA);
  const setAuth = useAuthStore((state) => state.setAuth);
  useEffect(() => {
    if (data?.data.id) {
      setAuth(true);
    }
  }, [data?.data, setAuth]);
};
