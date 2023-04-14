import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Main = () => {
  const [user, isLoading, error] = useAuthState(auth);

  // user'i getirmek için bir request yapmamız gerekiyor. o yüzden isLoading'i kullanıyoruz.
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
};

export default Main;
