import { FC } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div className="container">
      <div className="home-page">
        <h2 className="title">Hello User!</h2>
        <div className="home-page__content">
          <p className="home-page__text">Do you want to buy our products?</p>
          <Link className="home-page__link" to="/products">
            Yeah!!!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
