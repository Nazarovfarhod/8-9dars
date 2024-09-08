import { create } from "zustand";

export const useAppStore = create((set) => ({
  admin: null,
  flowers: null,
  setAdmin: (admin) => set((state) => ({ admin })),
  setFlowers: (flowers) => set((state) => ({ flowers })),
}));
