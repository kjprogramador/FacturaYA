import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";

export const fetchProducts = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/products`);
  return data;
};
