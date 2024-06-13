import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-hot-toast";
import axios from "axios";
export const ProductCard2 = ({prod, index}) => {
  const [liked, setLiked] = useState(false);
  const [offerPrice, setOfferPrice] = useState(0);
  // const [cart, setCart] = useState([
  //   {
  //     name: "",
  //     price: "",
  //   },
  // ]);

  // const handleCart = (name, price) => {
  //   setCart([
  //     {
  //       name: name,
  //       price: price,
  //     },

  //   ]);
  //   toast.success(`${name} Added to Cart`);
  // };

  const handleFavorite = (title) => {
    setLiked(!liked);
    liked
      ? toast.error("Removed to Whishlist " , title)
      : toast.success("Added to Whishlist " , title);
  };

  // if(prod.offer.type === "percentage") {
  //   const offer = prod.price * prod.offer.value / 100
  //   setOfferPrice(offer)
  // }

  // console.log(offerPrice);
  const data = {
    quantity : 1
  }

  const handleAddToCart = async(id) => {
    try {
      const res = await axios.post(`http://localhost:5555/api/v1/add-cart/${id}`,data,{
        withCredentials : true
      })
      if(res.data.success){
        toast.success("Product Added to Cart")
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }


  console.log(prod._id);
  return (
    <>
      <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          {
            prod.imageUrls[0] === undefined ? <img
            src="https://themewagon.github.io/hexashop/assets/images/men-03.jpg"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          /> 
          : <img
          src={prod.imageUrls[0]}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
          }
          
          <div className="px-4 py-3 w-72">
            <div className="flex items-center">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {prod.brand}
              </span>
              <div className="ml-auto">
                {liked ? (
                  <FavoriteIcon
                    style={{ color: "red" }}
                    onClick={() => handleFavorite(prod.title)}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    onClick={() => handleFavorite(prod.title)}
                  />
                )}
              </div>
            </div>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {prod.title}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                {prod.offerPrice.toFixed(2)}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">{prod.price}</p>
              </del>
              <div className="ml-auto">
                <AddShoppingCartOutlinedIcon
                  onClick={() => handleAddToCart(prod._id)}
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
