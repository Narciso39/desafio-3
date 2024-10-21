import api from "../services/api";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  image_link: string; 
  price: string;
  discount_price?: string;
  is_new?: boolean;
  category: {
    name: string; 
  };
}

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
      .get("/product")
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
