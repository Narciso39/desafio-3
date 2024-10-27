import { useEffect, useState } from "react";
import api from "../services/api";
import { Product } from "../types/Product";

interface UseAPIProductsByCategoryResult {
  products: Product[];
  totalPages: number;
  currentPage: number;
  error: Error | null;
  loading: boolean;
}

export const useAPIProductsByCategory = (
  categoryId: number,
  page: number = 1,
  limit: number = 16,
  order: "asc" | "desc" = "asc",
  sortBy: string = "price"
): UseAPIProductsByCategoryResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!categoryId) return;

    let isMounted = true;
    setLoading(true);

    api
      .get(`/product/category/${categoryId}`, {
        params: {
          page: String(page),
          limit: String(limit),
          order,
          sortBy,
        },
      })
      .then((response) => {
        if (isMounted) {
          setProducts(response.data.products);
          setTotalPages(response.data.totalPages);
          setCurrentPage(response.data.currentPage);
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
  }, [categoryId, page, limit, order, sortBy]);

  return { products, totalPages, currentPage, error, loading };
};
