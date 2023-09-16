import { NavLink } from "react-bootstrap";
import { useContext, useState } from "react";
import { ContextCart } from "../../context/ContextCart";
// import { categories } from "../../data/categories";

import pizza from "../../assets/pizza.svg";
import where from "../../assets/Куда пицца.svg";
import korz from "../../assets/korzina.svg";

import "../../sass/Header.scss";
import HeaderCategory from "./HeaderCategory";
import { Link } from "react-router-dom";

const Header = () => {
  const { values } = useContext(ContextCart);
  let totalPrice = 0;

  values.map((el) => {
    totalPrice += +el.price * el.quantity;
  });

  const [act, setAct] = useState(false);
  const [fix, setFix] = useState(false);

  const actives = () => {
    if (window.scrollY >= 135) {
      setAct(true);
    } else {
      setAct(false);
    }
  };
  const fixeds = () => {
    if (window.scrollY >= 53) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", actives);
  window.addEventListener("scroll", fixeds);
  return (
    <>
      <HeaderCategory />
      <header className={`header__bottom py-3 ${fix ? "fix" : ""}`}>
        <div className="container">
          <nav className="header__nav d-flex justify-content-between mx-3 align-items-center">
            <div className="header__nav-item">
              <NavLink to="/" className="header__nav-link">
                <img src={pizza} alt="logo" />
                <img src={where} alt="logo" />
              </NavLink>
            </div>
            <div
              className={`category justify-content-between gap-5 ${
                act ? "block" : "none"
              }`}
            >
              {/* {categories.map((el) => (
              <a key={el.name} className="category__links" href={`#${el.name}`}>
                <h3 className="category__title">{el.name}</h3>
              </a>
            ))} */}
            </div>
            <div className="header__nav-menu">
              <Link to="/cart" className="header__nav-links">
                <img src={korz} />
                <span className="header__nav-price">{totalPrice}</span>₽
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
