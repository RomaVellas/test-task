import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../../../store/products.slice";
import { RootState, AppDispatch } from "../../../store/store";
import ProductCard from "../../ProductCard/ProductCard";
import { Product } from "../../../store/types";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error, filterCategory } = useSelector(
    (state: RootState) => state.products
  );

  const getProducts = (category: string) => {
    if (category === "like") {
      return [...products.filter((product) => product.like === true)];
    } else if (category === "all") {
      return products;
    }
  };

  const productsShown: Product[] | undefined = getProducts(filterCategory);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (productsShown === undefined) {
    return (
      <>
        <div className="products__filter-toggle">
          <button
            onClick={() => dispatch(productSlice.actions.filterProducts("all"))}
            className="products__btn-get-all-products"
          >
            Get All Products
          </button>
          <button
            onClick={() =>
              dispatch(productSlice.actions.filterProducts("like"))
            }
            className="products__btn-get-liked-products"
          >
            Get Liked Products
          </button>
        </div>
        <Link className="products__create-product" to="/create-product">
          + Create new product +
        </Link>
        <div className="products">Нет Продуктов</div>
      </>
    );
  }

  return (
    <>
      <div className="products__filter-toggle">
        <button
          onClick={() => dispatch(productSlice.actions.filterProducts("all"))}
          className="products__btn-get-all-products"
        >
          Get All Products
        </button>
        <button
          onClick={() => dispatch(productSlice.actions.filterProducts("like"))}
          className="products__btn-get-liked-products"
        >
          Get Liked Products
        </button>
      </div>
      <Link className="products__create-product" to="/create-product">
        + Create new product +
      </Link>
      <div className="products">
        {productsShown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
