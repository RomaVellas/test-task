import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage/HomePage";
import ProductsPage from "./components/Pages/ProductsPage/ProductsPage";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/products.slice";
import { AppDispatch } from "./store/store";
import CardProductPage from "./components/Pages/CardProductPage/CardProductPage";
import CreateProductPage from "./components/Pages/CreateProductPage/CreateProductPage";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<CardProductPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
