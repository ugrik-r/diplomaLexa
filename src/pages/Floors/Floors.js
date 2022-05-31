import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFloors } from "../../redux/reduxSlice";
import "./floors.styles.css";
import { ModalFloors } from "../../components/ModalFloors/ModalFloors";

export const Floors = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const floors = useSelector((state) => state.redux.floors);
  useEffect(() => {
    dispatch(fetchAllFloors());
  }, [dispatch]);
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="offices">
      <Button variant="contained">Добавить этаж</Button>
      {floors.map((floor, index) => (
        <div className="floor__item" key={index} onClick={() => setOpen(true)}>
          <p>Этаж номер: {floor.number}</p>
          <p>Идентификатор офиса: {floor.officeId}</p>
        </div>
      ))}
      {open && <ModalFloors handleCloseModal={handleCloseModal} />}
    </div>
  );
};
