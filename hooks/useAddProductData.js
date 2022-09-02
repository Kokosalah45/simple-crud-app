import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductData } from "../api-client/product";

export default function useAddProductData() {
  const queryClient = useQueryClient();
  return useMutation((inputData) => addProductData(inputData), {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
}
