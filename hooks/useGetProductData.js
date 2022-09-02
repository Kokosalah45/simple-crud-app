import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../api-client/product";

export default function useGetProductData() {
  return useQuery(["products"], getProductData);
}
