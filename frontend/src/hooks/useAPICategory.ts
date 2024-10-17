import api from "../services/api";
import { useEffect, useState } from "react";

export const useAPICategory = () => {
  const [category, setCtegory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    api
      .get("/category")
      .then((response) => {
        if (isMounted) {
          setCtegory(response.data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Ops! Ocorreu um erro: " + err);
          setError(err);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { category, error };
};
