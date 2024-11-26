
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [possword,setPossword]=useState('')
  const [posswordemail,setPosswordemail]=useState('')
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
  posswordemail==="admin@000" && possword ==="admin000"?navigate("/dashboard"):setErrorMessage("Incorrect password. Please try again.");
  }
  
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
          value={posswordemail}
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 350 }}
          onChange={(e) => setPosswordemail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={possword}
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 350 }}
          onChange={(e) => setPossword(e.target.value)}
        />
        {errorMessage && (
          <Typography color="error" sx={{ maxWidth: 350, textAlign: "center" }}>
            {errorMessage}
          </Typography>
        )}
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
  };
  
  export default Loginpage;
