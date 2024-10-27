import { useState } from "react";
import api from "../services/api";
import { ProductPost } from "../types/ProductPost";

const useSubmitProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitProduct = async (product: ProductPost) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await api.post("/product", product);
      if (response.status === 201) {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.response?.data.message || "Erro ao enviar produto");
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };

  return { submitProduct, loading, error, success };
};

export default useSubmitProduct;
