import apiClient from "../apiClient";

export default async function getProductData() {
  const { data } = await apiClient.get(`/api/products`);
  return data;
}
