import { createBrowserRouter } from "react-router-dom";
import { AdminSignin } from "../components/admin/AdminSignin";
import { UserLogin } from "../components/user/UserLogin";
import { UserSignup } from "../components/user/UserSignup";
import { AdminLayout } from "../layout/AdminLayout";
import { UserLayout } from "../layout/UserLayout";
import { AboutPage } from "../pages/AboutPage";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { AdminProfile } from "../pages/admin/AdminProfile";
import { ProductListingPage } from "../pages/AllProductPage";
import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";
import AddProductPage from "../pages/seller/AddProductPage";
import { ShopPage } from "../pages/ShopPage";
import { SingleProductPage } from "../pages/SingleProductPage";

export const router = createBrowserRouter([
  //gust routes
  
  {
    path: "/admin/signin",
    element: <AdminSignin />,
  },
  {
    path: "/signin",
    element: <UserLogin />,
  },
  {
    path: "/signup",
    element: <UserSignup />,
  },

  // admin routes
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/products/add",
        element: <AddProductPage />,
      },
    ],
  },

  //seller routes



  //user routes
  {
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element : <ProfilePage/>
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      // {
      //   path: "/shop",
      //   element: <ShopPage />,
      // },
      {
        path: "/shop",
        element: <ProductListingPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage />,
      },
      
    ],
  },
]);
