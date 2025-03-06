import { List, ListItem, ListItemText, Typography } from "@mui/material";
import useUserStore from "../store/userStore";
// import useUserStore from "../store/userStore";

const UserList = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <Typography variant="h6">User List</Typography>
      <List>
        {users.length === 0 ? (
          <Typography color="textSecondary">No users added yet!</Typography>
        ) : (
          users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
};

export default UserList;
