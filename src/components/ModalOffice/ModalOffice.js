import "./modalOffice.styles.css";
import cancelIcon from "../../assets/cancel-close.svg";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";

export const ModalOffice = ({ handleCloseModal }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      street: "",
      house: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="modal modal__office" onSubmit={handleSubmit(onSubmit)}>
      <img
        src={cancelIcon}
        alt="cancel"
        className="cancel"
        onClick={handleCloseModal}
      />
      <Controller
        name="street"
        control={control}
        render={({ field: { onChange } }) => (
          <input className="input" onChange={onChange} placeholder="Адрес" />
        )}
      />
      <Controller
        name="house"
        control={control}
        render={({ field: { onChange } }) => (
          <input className="input" onChange={onChange} placeholder="Дом" />
        )}
      />
      <Button variant="contained" type="submit">
        Обновить данные
      </Button>
      <Button variant="contained" color="error">
        Удалить офис
      </Button>
    </form>
  );
};
