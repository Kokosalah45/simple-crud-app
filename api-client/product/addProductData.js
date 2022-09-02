import apiClient from "../apiClient";

export default async function addProductData(inputData) {
  inputData.productPrice = parseFloat(inputData.productPrice);
  //todo check if the strings are numbers or not
  const { data } = await apiClient.post(`/api/products`, inputData);
  if (!data.success) {
    throw data.e;
  }

  return data;
}
