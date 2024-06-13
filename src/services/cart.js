import { useRecoilState } from "recoil";
import { cartState } from "../store/cartAttom";

export const getCart = async () => {
  const [cart, setCart] = useRecoilState(cartState);
  try {
    const res = await axios.get("http://localhost:5555/api/v1/cart", {
      withCredentials: true,
    });
    console.log(res.data.products);
    setCart(res.data);
  } catch (error) {
    console.log(error);
  }
};
