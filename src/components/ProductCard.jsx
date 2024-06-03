import React, { useState } from "react";
import {
  CardBody,
  CardHover,
  CardIcon,
  CardIconContainer,
  CardImage,
  CardImageContainer,
  CardPrice,
  CardSellingPrice,
  CardTitle,
  StyledCard,
} from "../styles/ProductCardStyle";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Stack } from "@mui/material";
import Rating from "@mui/material/Rating";

export const ProductCard = () => {
  const [ratingValue, setRatingValue] = useState(3.5);
  return (
    <>
      <StyledCard>
        <CardImageContainer>
          <CardImage src="https://themewagon.github.io/hexashop/assets/images/men-03.jpg" />
          <CardHover>
            <CardIconContainer>
              <VisibilityOutlinedIcon sx={CardIcon} />
            </CardIconContainer>
            <CardIconContainer>
              <FavoriteBorderOutlinedIcon sx={CardIcon} />
            </CardIconContainer>
            <CardIconContainer>
              <AddShoppingCartOutlinedIcon sx={CardIcon} />
            </CardIconContainer>
          </CardHover>
        </CardImageContainer>
        <CardBody>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <CardTitle>Men's T-Shirt</CardTitle>
            <Rating
              name="half-rating-read"
              value={ratingValue}
              precision={0.5}
              readOnly
            />
          </Stack>
          <Stack direction={"row"} alignItems={"end"} gap={"10px"}>
            <CardSellingPrice>₹999</CardSellingPrice>
            <CardPrice>₹1,999</CardPrice>
          </Stack>
        </CardBody>
      </StyledCard>
    </>
  );
};
