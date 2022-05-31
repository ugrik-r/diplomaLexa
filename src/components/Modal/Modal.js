import "./modal.styles.css";
import cancelIcon from "../../assets/cancel-close.svg";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateOrder } from "../../redux/reduxSlice";

export const Modal = ({ activeOrder, handleCloseModal }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      startDateTime: "",
      endDateTime: "",
    },
  });

  const statusOrder = useSelector((state) => state.redux.statusOrder);
  const onSubmit = (data) => {
    data.startDateTime = data.startDateTime.split("");
    data.startDateTime.splice(10, 0, "T");
    data.startDateTime.splice(11, 1);
    data.startDateTime.splice(16, 0, ":00");
    data.startDateTime = data.startDateTime.join("");
    data.endDateTime = data.endDateTime.split("");
    data.endDateTime.splice(10, 0, "T");
    data.endDateTime.splice(11, 1);
    data.endDateTime.splice(16, 0, ":00");
    data.endDateTime = data.endDateTime.join("");
    data["workplaceId"] = activeOrder.id;
    dispatch(fetchCreateOrder(data));
  };
  return (
    <form className="modal" onSubmit={handleSubmit(onSubmit)}>
      <p className="modal__paragraph">{`Место номер: ${activeOrder.id}`}</p>
      <p className="modal__paragraph">{`Этаж: ${activeOrder.floorId}`}</p>
      <img
        src={cancelIcon}
        alt="cancel"
        className="cancel"
        onClick={handleCloseModal}
      />
      <Controller
        name="startDateTime"
        control={control}
        render={({ field: { onChange } }) => (
          <input
            className="input"
            onChange={onChange}
            placeholder="Время начала"
          />
        )}
      />
      <Controller
        name="endDateTime"
        control={control}
        render={({ field: { onChange } }) => (
          <input
            className="input"
            onChange={onChange}
            placeholder="Конец времени"
          />
        )}
      />
      <Button variant="contained" type="submit">
        Забронировать
      </Button>
      {statusOrder === "rejected" && <p className="error">Место занято</p>}
      {statusOrder === "fulfilled" && <p className="success">Успешно забронировано</p>}
    </form>
  );
};
