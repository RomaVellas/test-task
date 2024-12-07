import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../../store/store";
import "./CardProductPage.css";

const CardProductPage = () => {
  const { products } = useSelector((state: RootState) => state.products);

  const { id } = useParams();

  const product = products.find((product) => Number(id) === product.id);

  if (product === undefined) {
    return <div className="product-page">No Product!</div>;
  }

  return (
    <div className="product-page">
      <h1 className="product-page__title">{product.title}</h1>
      <img
        className="product-page__img"
        src={product.image}
        alt={product.title}
      />
      <p className="product-page__description">{product.description}</p>
      <p className="product-page__category">Category: {product.category}</p>
      <p className="product-page__price">${product.price}</p>
      <div className="product-page__links">
        <Link to="/" className="product-page__link">
          Home
        </Link>
        <Link to="/products" className="product-page__link">
          Back Products
        </Link>
      </div>
    </div>
  );
};

export default CardProductPage;
