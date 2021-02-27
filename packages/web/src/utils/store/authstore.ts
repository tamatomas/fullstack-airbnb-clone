import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export type State = {
  isAuth: boolean;
  setAuth: (isAuth: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};
export const useAuthStore = create<State>(
  devtools(
    persist(
      (set) => ({
        isAuth: true,
        setAuth: (isAuth: boolean) => set({ isAuth }),
        loading: false,
        setLoading: (loading: boolean) => set({ loading }),
      }),
      {
        name: "globals-storage",
        getStorage: () => localStorage,
        
      }
    )
  )
);
