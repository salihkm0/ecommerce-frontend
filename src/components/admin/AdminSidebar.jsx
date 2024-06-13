import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListTitle,
  NavSubContainer,
  SidebarContainer,
  SidebarToggleIcon,
  ToggleIcon,
} from "../../styles/Sidebar/SidebarStyle.jsx";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { SidebarProfile } from "./SidebarProfile.jsx";

export const AdminSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarItems = [
    {
      name: "Dashboard",
      path: "/admin/dashbaord",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Coupons",
      path: "/coupons",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "Orders",
      path: "/orders",
    },
    {
      name: "Customers",
      path: "/customers",
    },
    {
      name: "Sellers",
      path: "/sellers",
    },
  ];

  useEffect(() => {
    const mobileNavHandler = (e) => {
      setOpenSidebar(false);
    };
    document.addEventListener("mousedown", mobileNavHandler);
  });

  return (
    <>
      <SidebarContainer open={openSidebar}>
        <SidebarToggleIcon open={openSidebar}>
          {openSidebar ? (
            <CloseIcon sx={ToggleIcon} onClick={() => setOpenSidebar(false)} />
          ) : (
            <DehazeIcon sx={ToggleIcon} onClick={() => setOpenSidebar(true)} />
          )}
        </SidebarToggleIcon>

        <NavSubContainer>
          <Link to={"/admin/profile"}>
            <SidebarProfile />
          </Link>
          <Box>
            {/* <ListTitle>Admin</ListTitle> */}
            <List>
              {sidebarItems.map((item ,index) => (
                <ListItem key={index}>
                  <Link exact to= {item.path}>
                    <Stack
                      direction={"row"}
                      spacing={"5px"}
                      alignItems={"center"}
                    >
                      <p>{item.name}</p>
                    </Stack>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          {/* <Box>
            <ListTitle>Teacher</ListTitle>
            <List>
              <ListItem>
                <Link to="/admin/teacher/list">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>View/Edit Teahers</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/teacher/attendace/list">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Teachers Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/teacher/attendace/add">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Add Teachers Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/subject-list">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Veiw/Edit Subjects</p>
                  </Stack>
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <ListTitle>Student</ListTitle>
            <List>
              <ListItem>
                <Link to="admin/veiw-students">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>View/Edit Students</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/parents-list">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>View/Edit Parents</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/stud-attendance/add">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Add Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/stud-attendance/view">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Students Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/student/exams">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Exams</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/student/results">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Students Results</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/admin/student/events">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Students Events</p>
                  </Stack>
                </Link>
              </ListItem>
            </List>
          </Box> */}
          {/* <ListTitle>SETTINGS</ListTitle> */}
        </NavSubContainer>
      </SidebarContainer>
    </>
  );
};
