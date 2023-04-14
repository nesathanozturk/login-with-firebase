import { auth } from "../firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { Box, Typography, Button } from "@mui/material";
import Loading from "../components/Loading";

const Home = () => {
  const [signOut, loading] = useSignOut(auth);

  if (loading) {
    return <Loading />;
  }

  const handleSignOut = () => {
    signOut();
    alert("You logged out!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        You logged in!
      </Typography>
      <Button
        onClick={handleSignOut}
        color="success"
        variant="contained"
        size="large"
      >
        Sign out
      </Button>
    </Box>
  );
};

export default Home;
