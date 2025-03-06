// src/components/MyUser.tsx
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import useUserStore from "../store/userStore";

const MyUser = () => {
  // Zustand স্টোর থেকে ইউজার ডাটা নেওয়া
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        User List
      </Typography>
      {/* ইউজার লিস্ট দেখানো */}
      <List>
        {users.length === 0 ? (
          <Typography color="textSecondary">No users added yet!</Typography>
        ) : (
          users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText
                primary={user.name}
                secondary={`Email: ${user.email}`}
              />
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
};

export default MyUser;
