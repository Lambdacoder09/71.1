import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function getProduct(id) {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
}
