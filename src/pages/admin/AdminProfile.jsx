import React from "react";
import { useRecoilState } from "recoil";
import { currentUserState } from "../../store/currentUserAttom";

export const AdminProfile = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  return (
    <>
      <div>AdminProfile</div>
      Name :
      {currentUser.firstName
        ? currentUser.firstName + " " + currentUser.lastName
        : "Loadding..."}
    </>
  );
};
