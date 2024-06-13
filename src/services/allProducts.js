import { useRecoilState } from "recoil";
import { allProductsState } from "../store/productsAttom";

export const getAllProducts = async () => {
  const [allProducts, setAllProducts] = useRecoilState(allProductsState);

  try {
    const res = await axios.get("http://localhost:5555/api/v1/product/all");
    console.log(res.data.products);
    setAllProducts(res.data.products);
  } catch (error) {
    console.log(error);
  }
};
