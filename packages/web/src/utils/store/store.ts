import create from "zustand"
import { persist } from "zustand/middleware"
if (!global.window) {
  require("localstorage-polyfill")
}

export type State = {
  isAuth: boolean
  setAuth: (isAuth: boolean) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}
export const useStore = create<State>(
  persist(
    set => ({
      isAuth: false,
      setAuth: (isAuth: boolean) => set({ isAuth }),
      loading: false,
      setLoading: (loading: boolean) => set({ loading }),
    }),
    {
      name: "globals-storage", // unique name
      storage: localStorage,
    }
  )
)
