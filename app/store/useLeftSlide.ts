import { create } from "zustand";

interface LeftSlide {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useLeftSlide = create<LeftSlide>((set, get) => {
  return {
    isOpen: false,
    setIsOpen: () => set({ isOpen: !get().isOpen }),
  };
});
