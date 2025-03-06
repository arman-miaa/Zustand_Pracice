import { create } from "zustand";

// ✅ 1. User এর টাইপ ডিফাইন করা
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ 2. Zustand Store এর টাইপ ডিফাইন করা
interface UserState {
  users: User[]; // ইউজার লিস্ট
  addUser: (name: string, email: string) => void; // নতুন ইউজার যোগ করা
}

// ✅ 3. Zustand Store তৈরি করা
const useUserStore = create<UserState>((set) => ({
  users: [],

  addUser: (name, email) => {
    set((state) => ({
      users: [...state.users, { id: crypto.randomUUID(), name, email }],
    }));
  },
}));

export default useUserStore;
