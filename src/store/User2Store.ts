import { create } from "zustand";



interface user2 {
    id:string,
    name: string,
    age: number,
}


interface User2Store {
    user2: user2[],
    addUser2: (name: string, age: number) => void;
}



const useUser2Store = create<User2Store>((set) => ({
  user2: [],
  addUser2: (name, age) => {
    set((state) => ({
      user2: [...state.user2, {id: crypto.randomUUID(), name, age }],
    }));
  },
}));


export default useUser2Store;