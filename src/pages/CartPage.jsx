/* eslint-disable react/prop-types */
import { useContext } from "react";
import { products } from "../data/products";
import { ContextCart } from "../context/ContextCart";

const SeelPage = () => {
  const { values, setValues } = useContext(ContextCart);

  const handleCardClicks = (id) => {
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
  const handleCardClickMinus = (id) => {
    let product = products.find((el) => el.id === id);
    let checkCart = values.find((el) => el.id === id);
    let newCart;

    if (checkCart) {
      newCart = values.map((el) => {
        if (el.id === id) {
          if (el.quantity < 2) {
            // Удаление элемента из корзины
            return null;
          } else {
            // Обновление значения quantity
            return { ...el, quantity: el.quantity - 1 };
          }
        }
        return el;
      });

      // Фильтрация удаленных элементов (со значением null)
      newCart = newCart.filter((el) => el !== null);
    } else {
      newCart = [...values, { ...product, quantity: 1 }];
    }

    setValues(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <section className="sell my-5">
      <div className="sell__order">
        <h2 className="sell__title">Ваш заказ</h2>
        <div className=" d-flex flex-column gap-4 mt-5">
          {values.length === 0 ? (
            <h4>Заказов нет</h4>
          ) : (
            values.map((value, i) => (
              <div
                key={i}
                className="sell__item d-flex flex-wrap flex-row align-items-center justify-content-between"
              >
                <img className="sell__image" src={value.image} alt="" />
                <h3 className="sell__item-title">{value.name}</h3>
                <p className="sell__item-description">{value.desc}</p>
                <div className="sell__item-controls d-flex align-items-center gap-2">
                  <button
                    onClick={() => handleCardClicks(value.id)}
                    className="sell__item-button sell__item-button--plus"
                  >
                    +
                  </button>
                  <p>{value.quantity}</p>
                  <button
                    onClick={() => handleCardClickMinus(value.id)}
                    className="sell__item-button sell__item-button--minus"
                  >
                    -
                  </button>
                </div>
                <strong className="sell__item-price">
                  {value.quantity * value.price} ₽
                </strong>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SeelPage;
