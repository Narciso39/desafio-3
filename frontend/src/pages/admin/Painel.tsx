import React, { useState, ChangeEvent, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/FirebaseContext";
import styles from "./Painel.module.css";
import useSubmitProduct from "../../hooks/useAPIPost";

export interface ProductPost {
  name: string;
  sku: string;
  category_id: number;
  description: string;
  large_description: string;
  price: number;
  discount_price: number | null;
  discount_percent: number | null;
  is_new: boolean;
  image_link: string;
  other_images_link: string[];
}

const Painel: React.FC = () => {
  const { user, loading } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  const [product, setProduct] = useState<ProductPost>({
    name: "",
    sku: "",
    category_id: 1,
    description: "",
    large_description: "",
    price: 0,
    discount_price: null,
    discount_percent: null,
    is_new: false,
    image_link: "",
    other_images_link: ["", ""],
  });

  const {
    submitProduct,
    loading: submitting,
    error,
    success,
  } = useSubmitProduct();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  if (loading) {
    return <p>Carregando...</p>;
  }

  
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Convertendo para o tipo correto
    const parsedValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : name === "category_id" || name === "price" || name === "discount_price" || name === "discount_percent"
        ? parseFloat(value) || null
        : value;

    setProduct((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleOtherImagesChange = (index: number, value: string) => {
    const updatedImages = [...product.other_images_link];
    updatedImages[index] = value;
    setProduct({ ...product, other_images_link: updatedImages });
  };

  const resetForm = () => {
    setProduct({
      name: "",
      sku: "",
      category_id: 1,
      description: "",
      large_description: "",
      price: 0,
      discount_price: null,
      discount_percent: null,
      is_new: false,
      image_link: "",
      other_images_link: ["", ""],
    });
    setShowSuccessMessage(false); // Resetar a mensagem de sucesso
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Produto a ser enviado:", product); // Adicionando log do produto
    await submitProduct(product);
    if (success) {
      resetForm();
      setShowSuccessMessage(true);
    } else {
      console.log("Erro ao enviar produto:", error); // Log de erro
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Cadastro de Produto</h2>
      {showSuccessMessage && (
        <p className={styles.success}>Produto enviado com sucesso!</p>
      )}
      <div className={styles.formGroup}>
        <label>Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>SKU</label>
        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={product.sku}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>ID da Categoria</label>
        <input
          type="number"
          name="category_id"
          placeholder="ID da Categoria"
          value={product.category_id}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Descrição</label>
        <textarea
          name="description"
          placeholder="Descrição"
          value={product.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Descrição Longa</label>
        <textarea
          name="large_description"
          placeholder="Descrição Longa"
          value={product.large_description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={styles.formGroup}>
        <label>Preço</label>
        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={product.price || ""}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Preço com Desconto</label>
        <input
          type="number"
          name="discount_price"
          placeholder="Preço com Desconto"
          value={product.discount_price || ""}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Percentual de Desconto</label>
        <input
          type="number"
          name="discount_percent"
          placeholder="Percentual de Desconto"
          value={product.discount_percent || ""}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>
          Novo?
          <input
            type="checkbox"
            name="is_new"
            checked={product.is_new}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>Link da Imagem Principal</label>
        <input
          type="text"
          name="image_link"
          placeholder="Link da Imagem Principal"
          value={product.image_link}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Links de Outras Imagens</label>
        <div className={styles.imageLinks}>
          <input
            type="text"
            placeholder="Link de Outras Imagens 1"
            value={product.other_images_link[0]}
            onChange={(e) => handleOtherImagesChange(0, e.target.value)}
          />
          <input
            type="text"
            placeholder="Link de Outras Imagens 2"
            value={product.other_images_link[1]}
            onChange={(e) => handleOtherImagesChange(1, e.target.value)}
          />
        </div>
      </div>
      <input type="submit" className={styles.submitBut}  value="Enviar Produto" />
    </form>
  );
};

export default Painel;
