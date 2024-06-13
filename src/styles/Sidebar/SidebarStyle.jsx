import { styled } from "styled-components";

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: #c1c1c14c;
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "0px" : "-300px")};
  border-right: 3px solid #d6580f;
  transition: all 0.5s ease-in-out;
  z-index: 999;

  backdrop-filter: blur(20px);
  /* overflow-y: scroll;
  overflow-x: hidden; */
  @media (max-width: 600px) {
    width: 250px;
    left: ${(props) => (props.open ? "0px" : "-250px")};
  }
`;
export const SidebarToggleIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #d6580f;
  position: absolute;
  top: 10px;
  right: 0;
  display: grid;
  place-items: center;
  margin-right: ${(props) => (props.open ? "-50px" : "-60px")};
  border-radius: ${(props) => (props.open ? "0px" : "5px")};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.5s ease-in-out;
  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
    top: ${(props) => (props.open ? "10px" : "55px")};
    margin-right: ${(props) => (props.open ? "-35px" : "-45px")};

  }
`;
export const ToggleIcon = {
  fontSize: "40px",
  color: "#fff",
  backdropFilter: " blur(20px)",
  "@media (max-width: 600px)": {
    fontSize: "25px",
  },
};

export const NavSubContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  &::-webkit-scrollbar {
    /* height: 6px; */
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d6580f;
    /* border-radius: 5px; */
  }
`;

export const ListTitle = styled.p`
  font-size: 13px;
  margin: 10px 20px;
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
  padding: 10px 30px;
`;
export const ListItemIcon = {
  fontSize: "18px",
};

export const SidebarProfileContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #6f6f6f;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const UserName = styled.h2`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.25;
  color: #ffffff;
`;
export const UserEmail = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`;
export const UserPhone = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`;

export const UserRoll = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(255, 128, 0, 0.996);
`;


export const Logout = styled.p`
  
`