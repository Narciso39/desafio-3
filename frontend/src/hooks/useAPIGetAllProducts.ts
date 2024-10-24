import api from "../services/api";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";



interface UseAPIProductsByCategoryResult {
  products: Product[]; // ajustado para corresponder à interface
  error: Error | null;
  loading: boolean;
}

export const useAPIGetAllProducts = (): UseAPIProductsByCategoryResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    api
      .get("/product?page=1&limit=16&order=asc&sortBy=price")
      .then((response) => {
        if (isMounted) {
          setProducts(response.data);
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
  }, []);

  return { products, error, loading };
};
