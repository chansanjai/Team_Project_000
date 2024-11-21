
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Add your authentication logic here if needed
    navigate("/dashboard"); // Navigate to the dashboard
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 2,
        padding: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 350 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 350 }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ maxWidth: 350, width: "100%" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Loginpage;
