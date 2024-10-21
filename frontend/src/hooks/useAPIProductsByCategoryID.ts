import { useEffect, useState } from "react";
import api from "../services/api";

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
  product: Product[];
  error: Error | null;
  loading: boolean;
}

export const useAPIProductsByCategory = (
  categoryId: string
): UseAPIProductsByCategoryResult => {
  const [product, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!categoryId) return; 
    
    let isMounted = true;
    setLoading(true);
  
    api
      .get(`/product/category/${categoryId}`)
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
  }, [categoryId]);
  
  return { product, error, loading };
};
