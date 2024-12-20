import { useEffect, useState } from "react";
import api from "../services/api";
import { Product } from "../types/Product";



interface UseAPIProductsByIdResult {
  product: Product | undefined;
  error: Error | null;
  loading: boolean;
}

export const useAPIProductsById = (id: string): UseAPIProductsByIdResult => {
  const [product, setProducts] = useState<Product>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;
    setLoading(true);

    api
      .get(`/product/${id}`)
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
  }, [id]);

  return { product, error, loading };
};
