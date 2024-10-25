import { useEffect, useState } from "react";
import api from "../services/api";
import { Product } from "../types/Product";

interface UseAPIProductsResult {
  products: Product[];
  totalCount: number; // Para saber o total de produtos
  error: Error | null;
  loading: boolean;
}

export const useAPIGetAllProducts = (
  page: number,
  limit: number,
  filters: string[] = [], 
  sortBy: string = "asc" 
): UseAPIProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    api
      .get(`/product?page=${page}&limit=${limit}&order=asc&sortBy=price`)
      .then((response) => {
        if (isMounted) {
          setProducts(response.data.products); // Recebe os produtos
          setTotalCount(response.data.totalCount); // Total de produtos
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [page, limit]);

  return { products, totalCount, error, loading };
};
