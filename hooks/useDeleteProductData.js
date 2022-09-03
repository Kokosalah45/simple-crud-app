import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductData } from "../api-client/product";

export default function useDeleteProductData() {
  const queryClient = useQueryClient();
  return useMutation((inputData) => deleteProductData(inputData), {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
}
