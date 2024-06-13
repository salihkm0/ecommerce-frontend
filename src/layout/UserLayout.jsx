import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/user/UserNavbar'
import { cartState } from '../store/cartAttom'
import { currentUserState } from '../store/currentUserAttom'
import { allProductsState } from '../store/productsAttom'

export const UserLayout = () => {
  const [allProducts, setAllProducts] = useRecoilState(allProductsState);
  const [cart, setCart] = useRecoilState(cartState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userId: "",
    userRole: "",
  });


  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5555/api/v1/product/all");
      // console.log(res.data.products);
      setAllProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const res = await axios.get("http://localhost:5555/api/v1/cart", {
        withCredentials: true,
      });
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };



const getCurrentUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5555/api/v1/current-user",
        userData,
        {
          withCredentials: true,
        }
      );
      setCurrentUser(res.data.user);
      console.log("responce : ", res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  
  const checkUser = async () => {
    
    try {
      const res = await axios.get("http://localhost:5555/api/v1/check-user", {
        withCredentials: true,
      });
      console.log(res.data);
      setUserData({ userId: res.data.user.data, userRole: res.data.user.role });
      if (res.data.success) {
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };





  useEffect(() => {
    checkUser();
    getAllProducts()
    getCart()
  }, [])

  useEffect(() => {
    getCurrentUser()
  },[userData])

  console.log(allProducts)
  console.log(cart);
  console.log(currentUser);

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
