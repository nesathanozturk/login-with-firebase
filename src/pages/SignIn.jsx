import { auth } from "../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LockIcon from "@mui/icons-material/Lock";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
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
      <Typography variant="h4">Sign In</Typography>
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
        {error && (
          <Typography variant="body2" color="primary">
            {error.message}
          </Typography>
        )}
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
      <Link to="/sign-up">Don't have an account? Sign up</Link>
      <Button
        type="submit"
        onClick={() => signInWithEmailAndPassword(email, password)}
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
        Sign in
      </Button>
    </Box>
  );
};

export default SignIn;
