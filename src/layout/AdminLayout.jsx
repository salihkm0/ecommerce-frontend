import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import {
  // AdminPage,
  // AdminPageWarning,
  MainContainer,
  // RightBox,
} from "../components/admin/AdminUi";
import { Topbar } from "../components/admin/Topbar";
// import { Footer } from "../components/Footer";

export const AdminLayout = () => {
  // useEffect(() => {
  //   checkUser();
  //   getAllProducts()
  //   getCart()
 //}, []);
  return (
    <>
      <Topbar />
      <AdminSidebar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};
