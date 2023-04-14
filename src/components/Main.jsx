import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loading from "./Loading";

const Main = () => {
  const [user, isLoading] = useAuthState(auth);

  // user'i getirmek için bir request yapmamız gerekiyor. o yüzden isLoading'i kullanıyoruz.
  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
};

export default Main;
