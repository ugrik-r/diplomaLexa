import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalOffice } from "../../components/ModalOffice/ModalOffice";
import officeIcon from "../../assets/office.svg";
import { Button } from "@mui/material";
import { fetchAllOffices } from "../../redux/reduxSlice";
import "./offices.styles.css";

export const Offices = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const offices = useSelector((state) => state.redux.offices);
  useEffect(() => {
    dispatch(fetchAllOffices());
  }, [dispatch]);
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="offices">
      <Button variant="contained">Создать офис</Button>
      {offices.map((office, index) => (
        <div className="office__item" key={index} onClick={() => setOpen(true)}>
          <img src={officeIcon} alt="registration" className="user-icon" />
          <p>Улица: {office.street}</p>
          <p>Дом: {office.houseNumber}</p>
          
        </div>
      ))}
      {open && <ModalOffice handleCloseModal={handleCloseModal} />}
    </div>
  );
};
