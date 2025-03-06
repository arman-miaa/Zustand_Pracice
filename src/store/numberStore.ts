import { create } from "zustand";

// ✅ Zustand Store তৈরি করা
interface NumberState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

const useNumberStore = create<NumberState>((set) => ({
  count: 0,

  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useNumberStore;
