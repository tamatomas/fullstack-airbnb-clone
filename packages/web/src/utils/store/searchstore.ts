import create from "zustand";
import { persist } from "zustand/middleware";
import { Listing } from "@airbnb/common";

export type State = {
  searchArgs: Partial<Listing> | undefined;
  setArgs: (listing: Partial<Listing>) => void;
  resetSearch: () => void;
};

export const useSearchStore = create<State>(
  persist(
    (set) => ({
      searchArgs: undefined,
      setArgs: (searchArgs: Partial<Listing>) => set({ searchArgs }),
      resetSearch: () => set({ searchArgs: undefined }),
    }),
    {
      name: "search-storage",
      storage: localStorage,
    }
  )
);
