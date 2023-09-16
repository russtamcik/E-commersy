import { useContext } from "react";
import { products } from "../data/products";
import { ContextCart } from "../context/ContextCart";

import Card from "../components/card/Cards";
import Category from "../components/categories/Category";

const HomePage = () => {
  const cat = [
    "Пицца",
    "Суши",
    "Закуски",
    "Десерты",
    "Напитки",
    "Соусы",
    "Комбо",
  ];
  const { values, setValues } = useContext(ContextCart);

  let data = {};

  cat.map((category) => {
    data[category] = products.filter(
      (product) => product.category === category
    );
  });
  const handleCardClick = (id) => {
    let product = products.find((el) => el.id === id);
    let checkCart = values.find((el) => el.id === id);
    let newCart;
    if (checkCart) {
      newCart = values.map((el) => {
        if (el.id === id) {
          el.quantity++;
        }
        return el;
      });
      setValues(newCart);
    } else {
      newCart = [...values, { ...product, quantity: 1 }];
      setValues(newCart);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <>
      <Category />
      {cat.map((category) => (
        <div key={category}>
          <h1 id={category} className="title-category">
            {category}
          </h1>
          <Card data={data[category]} handleCardClick={handleCardClick} />
        </div>
      ))}
    </>
  );
};

export default HomePage;
