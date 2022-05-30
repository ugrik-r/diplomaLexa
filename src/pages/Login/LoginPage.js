import { Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchLoginUser } from "../../redux/reduxSlice";
import "./login.styles.css";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(fetchLoginUser(data));
  };
  return (
    <div className="login">
      <div className="login__content">
        <h1>Вход</h1>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="login"
            control={control}
            render={({ field: { onChange } }) => (
              <input
                className="input"
                onChange={onChange}
                placeholder="Имя пользователя"
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
          <Button variant="contained" type="submit">
            Вход
          </Button>
        </form>
      </div>
    </div>
  );
};
