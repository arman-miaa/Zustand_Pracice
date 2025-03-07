import { create } from "zustand";



interface User2 {
  id: string,
  name: string,
  email: string,
  age:number,
}

interface User2State{
  users2: User2[],
  addUser2: (name: string,email:string,age:number) => void;
}


const useUser2Store = create<User2State>((set) => ({
  users2: [],
  addUser2: (name, email, age) => {
    set((state) => ({
      users2: [...state.users2,{id:crypto.randomUUID(), name,email,age}]
    }))
  }
}))


export default useUser2Store;