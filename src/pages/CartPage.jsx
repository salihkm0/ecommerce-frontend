import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import "tailwindcss/tailwind.css";
import { cartState } from "../store/cartAttom";
import { allProductsState } from "../store/productsAttom";
import { StyledContainer } from "../styles/ContainerStyle";

import { CartCard } from "../components/CartCard.jsx";
import {
  Bold,
  CartAddress,
  CartAddressButton,
  CartAddressContainer,
  CartLeftContainer,
  CartMainContainer,
  CartRightContainer,
  CartRightSubContainer,
  CartSubContainer,
  DiscountDiscription,
  PlaceOrderBtn,
  PlaceOrderBtnContainer,
  PriceListItem,
  PriceListItemOff,
  RightHead,
  RightHeadContainer,
  RightPriceList,
  TotalAmt,
  TotalAmtContainer,
} from "../styles/Cartstyle.jsx";

export const CartPage = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [allProducts, setAllProducts] = useRecoilState(allProductsState);

  // const calculateTotalPrice = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  console.log(cart);
  return (
    <StyledContainer>
      {cart.products.length !== 0 || cart !== undefined ? (
        <CartMainContainer>
          <CartLeftContainer>
            <CartAddressContainer>
              <CartAddress>
                Deliver to: <Bold>Malappuram - 349023</Bold>
              </CartAddress>
              <CartAddressButton>Change</CartAddressButton>
            </CartAddressContainer>
            <CartSubContainer>
              {cart.products.map((prod) => (
                <CartCard prod = {prod} />
              ))}
            </CartSubContainer>
          </CartLeftContainer>
          <CartRightContainer>
            <CartRightSubContainer>
              <RightHeadContainer>
                <RightHead>Price Details</RightHead>
              </RightHeadContainer>
              <RightPriceList>
                <PriceListItem>Price(2 items)</PriceListItem>
                <PriceListItem>$1299.00</PriceListItem>
              </RightPriceList>
              <RightPriceList>
                <PriceListItem>Discount</PriceListItem>
                <PriceListItemOff>-$23.56</PriceListItemOff>
              </RightPriceList>
              <RightPriceList>
                <PriceListItem>Coupons for you</PriceListItem>
                <PriceListItemOff>-$9.00</PriceListItemOff>
              </RightPriceList>
              <RightPriceList>
                <PriceListItem>Delivery Charges</PriceListItem>
                <PriceListItemOff>Free</PriceListItemOff>
              </RightPriceList>
              <RightPriceList>
                <PriceListItem>Secured Packaging Fee</PriceListItem>
                <PriceListItem>$9.99</PriceListItem>
              </RightPriceList>
              <TotalAmtContainer>
                <TotalAmt>Total Amount</TotalAmt>
                <TotalAmt>$1459.35</TotalAmt>
              </TotalAmtContainer>
              <DiscountDiscription>
                You will save $495.19 on this order
              </DiscountDiscription>
              <PlaceOrderBtnContainer>
                <PlaceOrderBtn>PLACE ORDER</PlaceOrderBtn>
              </PlaceOrderBtnContainer>
            </CartRightSubContainer>
          </CartRightContainer>
        </CartMainContainer>
      ) : (
        <p>Your Cart Is Empty</p>
      )}
    </StyledContainer>
  );
};
