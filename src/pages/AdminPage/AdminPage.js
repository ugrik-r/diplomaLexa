import registrIcon from "../../assets/registr-icon.svg";

export const AdminPage = () => {
  return (
    <div className="user">
      <div className="user__info user__item">
        <img src={registrIcon} alt="registration" className="user-icon" />
        <p className="user__paragraph">Регистрация нового пользователя</p>
      </div>
    </div>
  );
};
