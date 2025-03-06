import { Button, Typography, Box } from "@mui/material";
import useNumberStore from "../store/numberStore";

const Counter = () => {
  const { count, increase, decrease, reset } = useNumberStore();

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h5">Counter: {count}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <Button variant="contained" onClick={increase}>
          ➕ Increase
        </Button>
        <Button variant="outlined" onClick={decrease}>
          ➖ Decrease
        </Button>
        <Button color="error" variant="contained" onClick={reset}>
          🔄 Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
