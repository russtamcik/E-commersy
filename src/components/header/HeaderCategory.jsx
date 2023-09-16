import loc from "../../assets/location.svg";
import arrow from "../../assets/Arrow down.svg";
import person from "../../assets/contact.svg";

const HeaderCategory = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="header-body">
            <div className="place d-flex align-items-center gap-2">
              <img src={loc} />
              <p className="mosc">Москва</p>
              <img src={arrow} alt="" />
            </div>
            <p>Проверить адрес</p>
            <div className="time">
              <p>Среднее время доставки*:</p>
              <span>00:24:19</span>
            </div>
          </div>
          <div className="routine">
            <p>Время работы: с 11:00 до 23:00</p>
            <div className="register">
              <img src={person} />
              <p>Войти в аккаунт</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCategory;
