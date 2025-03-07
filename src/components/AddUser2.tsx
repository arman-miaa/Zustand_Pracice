import { Button, TextField } from "@mui/material"
import React, { useState } from "react";
import useUser2Store from "../store/User2Store";


const AddUser2 = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState<number>(0)
  
const addUser2 = useUser2Store((state)  => state.addUser2)

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, age);
    addUser2(name,email,age)
  }

  return (
    <div className="container mx-auto">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-2xl text-center">Add User 2</h1>
        <form onSubmit={handleSumbit}>
          <TextField
            id="name"
            fullWidth
            label="Name"
            value={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="email"
            sx={{ mt: 2 }}
            fullWidth
            label="Email"
            value={email}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="age"
            fullWidth
            sx={{ mt: 2 }}
            label="Age"
            type="number"
            value={age}
            variant="outlined"
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Contained
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddUser2