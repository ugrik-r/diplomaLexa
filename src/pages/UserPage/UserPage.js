import "./userPage.styles.css";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/user-icon.svg";
import workplaceIcon from "../../assets/workplace.svg";

export const UserPage = () => {
  let navigate = useNavigate();
  return (
    <div className="user">
      <div className="user__info user__item">
        <img src={userIcon} alt="user" className="user-icon" />
        <p className="user__paragraph">Личный кабинет пользователя</p>
        <p className="user__paragraph">Просмотр информации</p>
      </div>
      <div className="user__item" onClick={() => navigate("/order-workplace")}>
        <img src={workplaceIcon} alt="workplace" className="user-icon" />
        <p className="user__paragraph">Забронировать рабочее место</p>
      </div>
    </div>
  );
};
