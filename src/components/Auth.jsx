import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"; 
import { auth } from "../firebase";
import Loading from "./Loading";

const Auth = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default Auth;
