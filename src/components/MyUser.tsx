// src/components/MyUser.tsx
import { List, ListItem, ListItemText, Typography } from "@mui/material";

import useUser2Store from "../store/User2Store";

const MyUser = () => {
  // Zustand স্টোর থেকে ইউজার ডাটা নেওয়া
const users2 = useUser2Store((state) => state.user2)

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        User List
      </Typography>
      {/* ইউজার লিস্ট দেখানো */}
      <List>
        {users2.length === 0 ? (
          <Typography color="textSecondary">No users added yet!</Typography>
        ) : (
          users2.map((user) => (
            <ListItem key={user.id}>
              <ListItemText
                primary={user.name}
                secondary={user.age}
              />
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
};

export default MyUser;
