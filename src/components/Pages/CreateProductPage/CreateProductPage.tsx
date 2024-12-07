import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../../store/types";
import { productSlice } from "../../../store/products.slice";
import "./CreateProductPage.css";

const CreateProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("men's clothing");
  const [image, setImage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct: Product = {
      id: Date.now(),
      title,
      price,
      description,
      category,
      image,
      rating: {
        rate: 0,
        count: 0,
      },
      like: false,
    };

    dispatch(productSlice.actions.createProduct(newProduct));

    // Очистка формы
    setTitle("");
    setPrice(0);
    setDescription("");
    setCategory("men's clothing");
    setImage("");
  };

  return (
    <form className="create-product__form" onSubmit={handleSubmit}>
      <label htmlFor="title">Product Name:</label>
      <input
        className="create-product__input"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        minLength={3}
      />

      <label htmlFor="price">Price:</label>
      <input
        className="create-product__input"
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
        min={0.01}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        className="create-product__input"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="jewelery">jewelry</option>
        <option value="electronics">electronics</option>
      </select>

      <label htmlFor="image">Image link:</label>
      <input
        className="create-product__input"
        type="url"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button className="create-product__btn" type="submit">
        Create a product
      </button>
    </form>
  );
};

export default CreateProductPage;
