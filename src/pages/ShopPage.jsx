import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { ProductCard2 } from "../components/ProductCard2";
import { getAllProducts } from "../services/allProducts";
import { allProductsState } from "../store/productsAttom";
import { StyledContainer } from "../styles/ContainerStyle";

export const ShopPage = () => {
  const [allProducts] = useRecoilState(allProductsState);

  console.log(allProducts.length);
  return (
    <>
      <StyledContainer>
        {allProducts.length === undefined ? (
          <p>Loadiing</p>
        ) : (
          <>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <p>Showing 1 - 12 of {allProducts.length} Products</p>
              <p>Filter</p>
            </Stack>
            <section
              id="Projects"
              className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-between gap-y-20 gap-x-14 mt-10 mb-5"
            >
              {allProducts.map((prod, index) => (
                <ProductCard2 prod={prod} index={index} />
              ))}
            </section>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              paddingTop={"20px"}
            >
              <Pagination count={10} variant="outlined" color="primary" />
            </Stack>
          </>
        )}
      </StyledContainer>
    </>
  );
};
