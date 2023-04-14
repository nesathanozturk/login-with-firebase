import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"; // Artık kullanıcı giriş yapmış mı yoksa yapmamış mı diye kontrol edebiliriz.
import { auth } from "../firebase";

const Auth = () => {
  const [user, isLoading, error] = useAuthState(auth);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default Auth;
