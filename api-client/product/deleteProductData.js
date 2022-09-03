import apiClient from "../apiClient";

export default async function deleteProductData(inputData) {
  //todo check if the strings are numbers or not

  const { data } = await apiClient.delete(`/api/products`, { data: inputData });
  console.log(data);
  if (!data.success) {
    throw data.details;
  }
  inputData;
  return data;
}
