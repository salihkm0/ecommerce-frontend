import { Pagination, Stack } from "@mui/material";
import React from "react";
import { ProductCard2 } from "../components/ProductCard2";
import { StyledContainer } from "../styles/ContainerStyle";

export const ShopPage = () => {
  return (
    <>
      <StyledContainer>
        <Stack direction={"row"} alignItems = {"center"} justifyContent = {"space-between"}>
            <p>Showing  1 - 12  of 120 Products</p>
            <p>Filter</p>
        </Stack>
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-between gap-y-20 gap-x-14 mt-10 mb-5"
        >
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
        </section>
        <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingTop = {"20px"}
      >
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
      </StyledContainer>
      
    </>
  );
};
