import apiClient from "../apiClient";

export default async function updateProductData(inputData) {
  if (inputData.productPrice) {
    inputData.productPrice = parseFloat(inputData.productPrice);
  }
  //todo check if the strings are numbers or not
  const { data } = await apiClient.put(`/api/products`, inputData);
  if (!data.success) {
    throw data.details;
  }

  return data;
}
