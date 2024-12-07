import { Link } from "react-router-dom";
import "./ProductCard.css";
import { FaRegHeart } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Product } from "../../store/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { productSlice } from "../../store/products.slice";

type ProductCardProp = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProp) => {
  const dispatch = useDispatch<AppDispatch>();

  const truncateText = (title: string): string => {
    if (title.length <= 20) {
      return title;
    }
    const truncatedText = title.slice(0, 20) + "...";

    return truncatedText;
  };

  const slicedTitle = truncateText(product.title);

  const getLikeButtonClass = (like: boolean): string => {
    if (like) {
      return "product-card__btn-like--active";
    }
    return "";
  };

  const btnLikeClassActive: string = getLikeButtonClass(product.like);

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <h2 className="product-card__title">{slicedTitle}</h2>
      <p className="product-card__price">Price: {product.price} $</p>
      <img
        className="product-card__img"
        src={product.image}
        alt={slicedTitle}
      />
      <div className="product-card__footer">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(productSlice.actions.toggleLikeProduct(product));
          }}
          className={`product-card__btn-like ${btnLikeClassActive}`}
        >
          <FaRegHeart />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(productSlice.actions.deleteProduct(product));
          }}
          className="product-card__btn-delete"
        >
          <FaDeleteLeft />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
