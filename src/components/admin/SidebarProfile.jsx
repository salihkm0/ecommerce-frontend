import React from "react";
import {
  ProfileImage,
  ProfileImageContainer,
  SidebarProfileContainer,
  UserEmail,
  UserName,
  UserRoll,
} from "../../styles/Sidebar/SidebarStyle.jsx";

export const SidebarProfile = () => {
  return (
    <SidebarProfileContainer>
      <ProfileImageContainer>
        <ProfileImage
          src="https://as2.ftcdn.net/v2/jpg/02/60/19/05/1000_F_260190542_GIZO0eVLXwIoT0QoJ5ZlZQkwvwCmZNpf.jpg"
          alt="profile image"
        />
      </ProfileImageContainer>
      <div>
        <UserName>Salih Km</UserName>
        <UserEmail>salih@gmail.com</UserEmail>
        <UserRoll>Admin</UserRoll>
      </div>
    </SidebarProfileContainer>
  );
};
