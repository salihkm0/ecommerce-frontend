import { Toaster } from "react-hot-toast";
import { router } from "./routes/Router";
import { RouterProvider, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentUserState } from "./store/currentUserAttom";

export const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5555/api/v1/admin/profile",
        {
          withCredentials: true,
        }
      );
      console.log("Curent User",res.data.user);
      if (res.data.success) {
        setCurrentUser(res.data.user);
      } else {
        navigate("/admin/signin");
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Toaster />
    </>
  );
};
