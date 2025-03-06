
import React, { useState } from "react"
import useUser2Store from "../store/User2Store"
import { Box, Button, TextField } from "@mui/material"


const AddUser2 = () => {
    const [name,setName] = useState('')
    const [age, setAge] = useState<number>(0)

    const addUser2 = useUser2Store((state) => state.addUser2);
    
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        addUser2(name,age)

    }

  return (
    <div>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
        <h3  className="text-5xl">Add User 2</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            sx={{ mb: 2 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Age"
            fullWidth
            value={age}
            sx={{ mb: 2 }}
            onChange={(e) => setAge(Number(e.target.value))}
            type="number"
          />
          <Button type="submit" variant="contained" fullWidth>
            Add User2
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default AddUser2