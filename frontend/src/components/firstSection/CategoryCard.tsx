import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importando o Link
import styles from "./FirstSection.module.css";
import { useAPICategory } from "../../hooks/useAPICategory";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

const CategoryCards: React.FC = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const { category, error } = useAPICategory(); // Chamar o hook diretamente

  useEffect(() => {
    setCategories(category); // Definir o estado de categorias
  }, [category]);

  if (error) return <div>Erro ao carregar categorias.</div>;

  if (!categories) return <div>Carregando...</div>;

  return (
    <section className={styles.container}>
      {categories.map((cat) => (
        <Link key={cat.id} to={`/category/${cat.id}`} className={styles.card}> {/* Usando Link para redirecionar */}
          <img src={cat.image_link} alt={cat.name} className={styles.image} />
          <h3>{cat.name}</h3>
        </Link>
      ))}
    </section>
  );
};

export default CategoryCards;
