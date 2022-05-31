import "./userPage.styles.css";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/user-icon.svg";
import officeIcon from "../../assets/office.svg";
import pencilIcon from "../../assets/pencil.svg";
import { ButtonLogout } from "../../components/ButtonLogout/ButtonLogout";
import workplaceIcon from "../../assets/workplace.svg";

export const UserPage = () => {
  let navigate = useNavigate();
  return (
    <div className="user">
      <ButtonLogout />
      <div className="user__info user__item">
        <img src={userIcon} alt="user" className="user-icon" />
        <p className="user__paragraph">Просмотр информации пользователя</p>
      </div>
      <div className="user__item" onClick={() => navigate("/order-workplace")}>
        <img src={workplaceIcon} alt="workplace" className="user-icon" />
        <p className="user__paragraph">Забронировать рабочее место</p>
      </div>
      <div className="user__item">
        <img src={officeIcon} alt="workplace" className="user-icon" />
        <p className="user__paragraph">Просмотреть все офисы</p>
      </div>
      <div className="user__item">
        <img src={workplaceIcon} alt="workplace" className="user-icon" />
        <p className="user__paragraph">Просмотреть все рабочие места</p>
      </div>
      <div className="user__item">
        <img src={pencilIcon} alt="workplace" className="user-icon" />
        <p className="user__paragraph">Изменить личную информацию</p>
      </div>
    </div>
  );
};
