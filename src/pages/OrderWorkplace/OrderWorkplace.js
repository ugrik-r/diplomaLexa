import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWorkplace } from "../../redux/reduxSlice";
import { Button } from "@mui/material";
import { clearOrderStatus } from "../../redux/reduxSlice";
import { Modal } from "../../components/Modal/Modal";
import "./orderWorkplace.css";

export const OrderWorkplace = () => {
  const [open, setOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState();
  const dispatch = useDispatch();
  const workplaces = useSelector((state) => state.redux.workplaces);
  useEffect(() => {
    workplaces.length === 0 && dispatch(fetchAllWorkplace());
  }, [dispatch, workplaces.length]);

  const onClick = (data) => {
    setOpen(true);
    setActiveOrder(data);
  };
  const handleCloseModal = () => {
    setOpen(false);
    dispatch(clearOrderStatus());
  };
  console.log(workplaces);
  return (
    <div className="order__workplace">
      {workplaces?.map((workplace) => (
        <div className="workplace__item" key={workplace.id}>
          <p className="user__paragraph">{`Место номер: ${workplace.id}`}</p>
          <p className="user__paragraph">{`Этаж: ${workplace.floorId}`}</p>
          <p className="user__paragraph">{`Статус: ${
            workplace.message === "Workplace is free" ? "Свободно" : "Занято"
          }`}</p>
          <Button
            variant="contained"
            color="success"
            type="submit"
            onClick={() => onClick(workplace)}
          >
            Забронировать
          </Button>
        </div>
      ))}
      {open && <Modal activeOrder={activeOrder} handleCloseModal={handleCloseModal} />}
    </div>
  );
};