import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import {
  Box,
  Stack,
  Button,
  Typography,
  TextField,
  Avatar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LockIcon from "@mui/icons-material/Lock";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        jusifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem",
        backgroundColor: "white",
        width: "500px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "5px 5px 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Avatar>
        <LockIcon />
      </Avatar>
      <Typography variant="h4">Sign Up</Typography>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
      <Button
        type="submit"
        onClick={() => createUserWithEmailAndPassword(email, password)}
        variant="contained"
        endIcon={<SendIcon />}
        size="large"
        sx={{
          backgroundColor: "secondary.main",
          width: "100%",
          marginTop: "1rem",
          padding: "0.5rem",
          "&:hover": {
            backgroundColor: "secondary.dark",
          },
        }}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default SignUp;
