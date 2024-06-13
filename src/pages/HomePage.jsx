import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Banners from "../components/Banners";
// import { Navbar } from "../components/user/UserNavbar";
import { currentUserState } from "../store/currentUserAttom";
import { CaresolHeadding, CaresolSubContainer } from "../styles/CaresolStyle";
import { StyledContainer } from "../styles/ContainerStyle";
import { Section } from "../styles/SectionStyle";
import { Stack } from "@mui/material";
import { PrimeryButton } from "../styles/ButtonStyle";
import { MultiCarousel } from "../components/MultiCarousel";
import {
  ArrivalsContainer,
  ArrivalsDesc,
  ArrivalsHeadding,
  ArrivalsRightContainer,
  ArrivalsSubContainer,
} from "../styles/NewArrivalsStyle";
import { ProductCard } from "../components/ProductCard";
import { ShopAllContainer, ShopAllHeadding } from "../styles/ShopAllStyles";
// import { Footer } from "../components/Footer";
import { SmallCard } from "../components/SmallCard";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { allProductsState } from "../store/productsAttom";
import { cartState } from "../store/cartAttom";

export const HomePage = () => {
  // const navigate = useNavigate();
  // const [userData, setUserData] = useState({
  //   userId: "",
  //   userRole: "",
  // });
  const [currentUser] = useRecoilState(currentUserState);
  const [allProducts] = useRecoilState(allProductsState);
  const [cart] = useRecoilState(cartState);

  // const fetchUser = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://localhost:5555/api/v1/admin/profile",
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     console.log("Curent User",res.data.user);
  //     if (res.data.success) {
  //       setCurrentUser(res.data.user);
  //      }
  //      //else {
  //     //   navigate("/signin");
  //     // }
  //   } catch (error) {
  //     console.error("Failed to fetch user", error);
  //   }
  // };
  // const getAllProducts = async() => {
  //   try {
  //     const res = await axios.get(
  //       "http://localhost:5555/api/v1/product/all"
  //     );
  //     setAllProducts(res.data.products)
  //     console.log(res.data.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

//   const getCart = async() => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5555/api/v1/cart",{
//           withCredentials: true,
//         }
//       );
//       setCart(res.data)
//       console.log(res.data.products);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// console.log(cart);
  //http://localhost:5555/api/v1/cart

  // const getCurrentUser = async() => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5555/api/v1/current-user",
  //       userData,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //   setCurrentUser(res.data.user)
  //   // console.log("responce : ",res.data.user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  // const checkUser = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:5555/api/v1/check-user", {
  //       withCredentials: true,
  //     });
  //     // console.log(res.data);
  //       setUserData({ userId: res.data.user.data, userRole: res.data.user.role });
  //     if (res.data.success) {
  //       return navigate("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   checkUser();
  //   getAllProducts()
  //   getCart()
  // }, []);

  // useEffect(() => {
  //   getCurrentUser();
  // }, [userData]);


  console.log(currentUser);
  return (
    <>
      {/* <Navbar /> */}
      <StyledContainer>
        <Banners />
        <Section>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <CaresolHeadding>Featured Products</CaresolHeadding>
            <PrimeryButton>View All</PrimeryButton>
          </Stack>
          <CaresolSubContainer>
            <MultiCarousel />
          </CaresolSubContainer>
        </Section>
        <Section>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <CaresolHeadding>Best Selling</CaresolHeadding>
            <PrimeryButton>View All</PrimeryButton>
          </Stack>
          <CaresolSubContainer>
            <MultiCarousel />
          </CaresolSubContainer>
        </Section>

        <Section>
          <ArrivalsHeadding>Our latest Arrivals</ArrivalsHeadding>
          <ArrivalsDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Necessitatibus quod provident neque magni! Aliquid perspiciatis
          </ArrivalsDesc>
          <ArrivalsContainer>
            <ArrivalsSubContainer>erghtj</ArrivalsSubContainer>
            <ArrivalsSubContainer>
              <ArrivalsRightContainer>
                <p>gfgrfgf</p>
                <p>gfgrfgf</p>
              </ArrivalsRightContainer>
            </ArrivalsSubContainer>
          </ArrivalsContainer>
        </Section>
        <Section>
          <ShopAllHeadding>Explore Our Products</ShopAllHeadding>
          <ShopAllContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ShopAllContainer>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            margin={"15px 0"}
          >
            <PrimeryButton>View All</PrimeryButton>
          </Stack>
        </Section>
        <Section>
          <ShopAllHeadding>Why Choose Us</ShopAllHeadding>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
          >
            <SmallCard
              headding={"Free and Fast Delivery"}
              description={"Free delivery for all orders over 499rs"}
            />
            <SmallCard
              headding={"27/7 CUSTOMER SERVICE"}
              description={"Friendly 24/7 customer support"}
            />
            <SmallCard
              headding={"MONEY BACK GUARANTEE"}
              description={"We return money within 30 days"}
            />
          </Stack>
        </Section>
      </StyledContainer>
      {/* <Footer/> */}
    </>
  );
};
