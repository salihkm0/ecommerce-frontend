import { createBrowserRouter} from "react-router-dom";
import { AdminSignin } from "../components/admin/AdminSignin";
import { UserLogin } from "../components/user/UserLogin";
import { UserSignup } from "../components/user/UserSignup";
import { AdminLayout } from "../layout/AdminLayout";
import { UserLayout } from "../layout/UserLayout";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { HomePage } from "../pages/HomePage";


export const router = createBrowserRouter([

    //gust routes
    {
        path: "/",
        element: <HomePage />,
      },
    {
        path: "/admin/signin",
        element: <AdminSignin />,
      },
      {
        path : "/signin",
        element : <UserLogin/>
      },
      {
        path : "/signup",
        element : <UserSignup/>
      },

    // admin routes
    {
    element: <AdminLayout />,
    children: [
        {
          path: "/admin/dashboard",
          element: <AdminDashboard />,
        },
    ]
    },

    //seller routes



    //user routes
    {
        element : <UserLayout/>,
        children : [
            {
                path : "/user/profile",
            },

]}
])