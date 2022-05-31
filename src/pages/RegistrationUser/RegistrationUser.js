import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import {
  fetchRegistrationUser,
  clearRegistration,
} from "../../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import "./registrationUser.styles.css";
import { ButtonLogout } from "../../components/ButtonLogout/ButtonLogout";

export const RegistrationUser = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.redux.errors);
  const statusRegistration = useSelector(
    (state) => state.redux.statusRegistration
  );
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      login: "",
      email: "",
      phone: "",
      password: "",
      systemRoleId: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(clearRegistration());
    dispatch(fetchRegistrationUser(data));
  };
  return (
    <div className="registration">
      <ButtonLogout />
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange } }) => (
            <input className="input" onChange={onChange} placeholder="Имя" />
          )}
        />
        <Controller
          name="surname"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              className="input"
              onChange={onChange}
              placeholder="Фамилия"
            />
          )}
        />
        <Controller
          name="login"
          control={control}
          render={({ field: { onChange } }) => (
            <input className="input" onChange={onChange} placeholder="Логин" />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              className="input"
              onChange={onChange}
              placeholder="Почта"
              type="email"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              className="input"
              onChange={onChange}
              placeholder="Телефон"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              className="input"
              onChange={onChange}
              placeholder="Пароль"
              type="password"
            />
          )}
        />
        <Controller
          name="systemRoleId"
          control={control}
          render={({ field: { onChange } }) => (
            <select onChange={onChange}>
              <option value="">Выберите номер роли</option>
              <option value="1">1 - Админ</option>
              <option value="2">2 - Пользователь</option>
            </select>
          )}
        />
        <Button variant="contained" type="submit">
          Регистрация
        </Button>
        <div className="errors_wrapper">
          {errors.length !== 0 && <p className="error">{errors}</p>}
          {statusRegistration === "fulfilled" && <p>Пользователь создан</p>}
        </div>
      </form>
    </div>
  );
};
