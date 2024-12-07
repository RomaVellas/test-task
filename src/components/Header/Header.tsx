import { FC } from "react";
import { FaSearch, FaUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import TopInfo from "../TopInfo/TopInfo";

const Header: FC = () => {
  return (
    <div>
      <TopInfo />
      <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              {" "}
              <Link className="logo" to="/">
                <img src="./img/logo/Logo.svg" alt="Modimal" />
              </Link>
            </div>
            <nav className="header__nav nav">
              <ul className="nav__list">
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </nav>
            <div className="header__account header__account--first">
              <ul className="account">
                <li className="account__menu">
                  {" "}
                  <button className="mobile-nav-btn">
                    <div className="nav-icon"></div>
                  </button>
                </li>
                <li className="account__search">
                  {" "}
                  <Link to="#!">
                    <FaSearch className="icon icon--search" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#!">
                    <FaUser className="icon icon--person" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__account">
              <ul className="account">
                <li>
                  {" "}
                  <Link to="#!">
                    <FaRegHeart className="icon icon--favorite" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#!">
                    <FaShoppingBag className="icon icon--bag" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__nav-btn"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
