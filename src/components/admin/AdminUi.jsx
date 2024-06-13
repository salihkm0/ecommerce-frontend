import { Typography } from "@mui/material";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
  padding: 90px 50px;
  @media (max-width: 600px) {
    padding: 100px 10px;
  }
`;

export const AdminHeader = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f3f3f3;
  /* padding : 0 6%; */
  position: fixed;
  z-index: 999;
`;
export const SearchContianer = styled.div`
  border: 0.5px solid #000000;
  background: #fff;
  border-radius: 3px;
  width: 42%;
  height: 40px;
  display: flex;
  align-items: center;
  /* input{
        outline : none ;
        font-size : 14px;
        color : #777;
        width : 280px;
        height : 36px;  
        text-indent : 10px;              
    } */
`;
export const InputSearch = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-weight: 400;
  color: #262626;
  border-radius: 3px;
`;
export const ProfileContainer = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #ff7300;
  overflow: hidden;
  outline: none;
  border: none;
`;
export const ProfileImg = styled.img`
  height: 100%;
  width: 100%;
  /* border-radius : 50%; */
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  justify-self: center;
`;
export const LeftBox = styled.div`
  width: 300px;
  /* height : calc(100vh - 70px); */
  height: 100vh;
  background: #ffffff;
  border-right: 5px solid #ff7300;
  padding-top: 70px;
  position: fixed;
  overflow-y: scroll;
  z-index: 998;
`;
export const ListTitle = styled.p`
  font-size: 13px;
  margin: 10px 30px;
  font-weight: 600;
  color: #5c5c5c;
`;
export const List = styled.ul`
  list-style: none;

  :hover {
    cursor: pointer;
    color: #ff7300;
    background: #e4e4e4;
    transition: all 0.2s ease-in-out;
  }
  :active {
    color: #ff7300;
    background: #e4e4e4;
  }
  /* ::before{
        content : '';
        width :8px;
        height : 20px;
        background : #ff7300;
        position :absolute;
        left : 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    } */
`;
export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  text-decoration: none;
  /* padding : 5px 0; */
  padding: 5px 40px;
`;
export const ListItemIcon = {
  fontSize: "18px",
};

export const RightBox = styled.div`
  background: #ececec;
  width: 100%;
  height: 100vh;
  margin-left: 300px;
  /* margin-top : 60px; */
  padding: 100px 30px;
  
`;

export const LeftBoxBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: #d7d7d7;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

// export const NavLogo = styled.div`
//   font-size: 22px;
//   font-weight: 500;
//   transition: all 0.2s linear;
//   color: #000;
//   cursor : pointer;
// `;

export const NavLogo = styled.img`
  width: 100px;
  height: 30px;
  cursor: pointer;
`;

export const AdminPage = styled.div`
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const AdminPageWarning = styled.div`
  display: none;
  color: red;
  width: 100%;
  height: 100vh;
  @media (max-width: 700px) {
    display: grid;
    place-items: center;
  }
`;
