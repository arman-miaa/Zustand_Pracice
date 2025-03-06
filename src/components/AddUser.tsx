import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import useUserStore from "../store/userStore";


const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = useUserStore((state) => state.addUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("⚠️ Name and Email cannot be empty!");
      return;
    }

    addUser(name, email); // Zustand Store-এ নতুন ইউজার যোগ করা
    setName("");
    setEmail("");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h6">Add New User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Add User
        </Button>
      </form>
    </Box>
  );
};

export default AddUser;
