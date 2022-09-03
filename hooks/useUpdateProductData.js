import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductData } from "../api-client/product";

export default function useUpdateProductData() {
  const queryClient = useQueryClient();
  return useMutation((inputData) => updateProductData(inputData), {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
}
