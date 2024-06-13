import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentUserState } from "../store/currentUserAttom";

// const getCurrentUser = () => {
// export const fetchUser = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5555/api/v1/admin/profile",
//         {
//           withCredentials: true,
//         }
//       );
//       console.log(res.data.user);
//       if (res.data.success) {
//         setCurrentUser(res.data.user);
//       } else {
//         navigate("/admin/signin");
//       }
//     } catch (error) {
//       console.error("Failed to fetch user", error);
//     }
//   };-
// }
//
//


