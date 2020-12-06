import create from "zustand";
import { persist } from "zustand/middleware";
import { Listing } from "@airbnb/common";

export type State = {
  listing: Partial<Listing> | undefined;
  setListing: (listing: Partial<Listing>) => void;
  updateListing: (listing: Partial<Listing>) => void;
  resetListing: () => void;
};

export const useListingStore = create<State>(
  persist(
    (set) => ({
      listing: undefined,
      setListing: (listing: Partial<Listing>) => set({ listing }),
      updateListing: (listing: Partial<Listing>) => {
        set((state) => ({ listing: { ...state.listing, ...listing } }));
      },
      resetListing: () => set({ listing: undefined }),
    }),
    {
      name: "listing-storage", // unique name
      storage: localStorage,
    }
  )
);
