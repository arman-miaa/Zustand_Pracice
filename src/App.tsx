import { Container, Typography } from "@mui/material";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import Counter from "./components/Counter";
import MyUser from "./components/MyUser";

function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Zustand Example
      </Typography>
      <AddUser />
      <UserList />
      <Counter />
      <MyUser/>
    </Container>
  );
}

export default App;
