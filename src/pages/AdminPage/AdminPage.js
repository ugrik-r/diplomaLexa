import { useNavigate } from "react-router-dom";
import registrIcon from "../../assets/registr-icon.svg";
import officeIcon from "../../assets/office.svg";
import orderIcon from "../../assets/order.svg";
import userIcon from "../../assets/user-icon.svg";
import { ButtonLogout } from "../../components/ButtonLogout/ButtonLogout";

export const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div className="user">
      <ButtonLogout />
      <div
        className="user__info user__item"
        onClick={() => navigate("/registration-user")}
      >
        <img src={registrIcon} alt="registration" className="user-icon" />
        <p className="user__paragraph">Регистрация нового пользователя</p>
      </div>
      <div
        className="user__info user__item"
        onClick={() => navigate("/offices")}
      >
        <img src={officeIcon} alt="registration" className="user-icon" />
        <p className="user__paragraph">Просмотр информации о офисах</p>
      </div>
      <div className="user__info user__item" onClick={() => navigate("/users")}>
        <img src={userIcon} alt="registration" className="user-icon" />
        <p className="user__paragraph">Просмотр пользователей</p>
      </div>
      <div
        className="user__info user__item"
        onClick={() => navigate("/floors")}
      >
        <img src={officeIcon} alt="registration" className="user-icon" />
        <p className="user__paragraph">Просмотр этажей</p>
      </div>
      <div
        className="user__info user__item"
        onClick={() => navigate("/orders")}
      >
        <img src={orderIcon} alt="registration" className="user-icon" />
        <p className="user__paragraph">Просмотр бронирований</p>
      </div>
    </div>
  );
};
