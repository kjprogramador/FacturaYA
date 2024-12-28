import { useQuery } from "react-query";
import { fetchProducts } from "../services/productService";

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
