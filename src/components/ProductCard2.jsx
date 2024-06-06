import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-hot-toast";
export const ProductCard2 = () => {
  const [liked, setLiked] = useState(false);
  const [cart, setCart] = useState([
    {
      name: "",
      price: "",
    },
  ]);

  const handleCart = (name, price) => {
    setCart([
      {
        name: name,
        price: price,
      },

    ]);
    toast.success(`${name} Added to Cart`);
  };

  const handleFavorite = () => {
    setLiked(!liked);
    liked
      ? toast.error("Removed to Whishlist")
      : toast.success("Added to Whishlist");
  };
  return (
    <>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src="https://themewagon.github.io/hexashop/assets/images/men-03.jpg"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <div className="flex items-center">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <div className="ml-auto">
                {liked ? (
                  <FavoriteIcon
                    style={{ color: "red" }}
                    onClick={() => handleFavorite()}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    onClick={() => handleFavorite()}
                  />
                )}
              </div>
            </div>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div className="ml-auto">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg> */}
                <AddShoppingCartOutlinedIcon
                  onClick={() => handleCart("product1", "2999.99")}
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
