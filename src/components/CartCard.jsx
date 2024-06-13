import { Link } from "react-router-dom";
import {
  CartCarBody,
  CartCardBtn,
  CartCardBtnsContainer,
  CartCardCont,
  CartCardImg,
  CartCardImgContainer,
  CartCardOff,
  CartCardOffPrice,
  CartCardOGPrice,
  CartCardPriceContainer,
  CartProdDisc,
  CartProdName,
  CountIconStyle,
  ProdCount,
  ProdCountContainer,
} from "../styles/Cartstyle.jsx";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { useEffect, useState } from "react";
export const CartCard = ({prod}) => {
  const [product, setProduct] = useState()

  const getProduct = async() => {
    try {
      const res = await axios.get(`http://localhost:5555/api/v1/product/${prod.product}`)
      if(res.data.success){
        console.log(res);
        setProduct(res.data.product)
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(product.title)

  useEffect(() => {
    getProduct()
  },[prod._id])
  

  return (
    <CartCardCont>
      <Link to={`/product/${prod.product}`}>
        <CartCardImgContainer>
          <CartCardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
        </CartCardImgContainer>
      </Link>
      <CartCarBody>
        <Link to={`/product/${prod.product}`}>
          <CartProdName>{product.title}</CartProdName>
        </Link>
        <CartProdDisc>{product.description}</CartProdDisc>
        <CartCardPriceContainer>
          <CartCardOffPrice>{product.offerPrice}</CartCardOffPrice>
          <CartCardOGPrice>${product.price}</CartCardOGPrice>
          <CartCardOff>{product.offer.value}</CartCardOff>
        </CartCardPriceContainer>
        <ProdCountContainer>
          <RemoveIcon sx={CountIconStyle} />
          <ProdCount>1</ProdCount>
          <AddIcon sx={CountIconStyle} />
        </ProdCountContainer>
        <CartCardBtnsContainer>
          <CartCardBtn>Buy now</CartCardBtn>
          <CartCardBtn>Save for later</CartCardBtn>
          <CartCardBtn>Remove</CartCardBtn>
        </CartCardBtnsContainer>
      </CartCarBody>
    </CartCardCont>
  );
};
