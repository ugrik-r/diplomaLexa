import { useNavigate } from "react-router-dom";
import registrIcon from "../../assets/registr-icon.svg";
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
    </div>
  );
};
