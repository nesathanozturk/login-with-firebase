import { auth } from "../firebase";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading />;
  }

  const handleSingIn = () => {
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      signInWithEmailAndPassword(email, password);
    }
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        jusifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        width: "31.25rem",
        padding: "2rem",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "5px 5px 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Avatar>
        <PersonIcon />
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
          required
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
          required
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Stack>
      <Link to="/sign-up">Don't have an account? Sign up!</Link>
      <Button
        type="submit"
        onClick={handleSingIn}
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
      <Button
        onClick={handleSignInWithGoogle}
        variant="contained"
        endIcon={<GoogleIcon />}
        size="large"
        sx={{
          backgroundColor: "warning.main",
          width: "100%",
          padding: "0.5rem",
          "&:hover": {
            backgroundColor: "warning.dark",
          },
        }}
      >
        Sign in with Google
      </Button>
    </Box>
  );
};

export default SignIn;
