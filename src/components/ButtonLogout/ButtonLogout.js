import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/reduxSlice";
import { useNavigate } from "react-router-dom";

export const ButtonLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.clear();
    dispatch(clearUser());
    navigate("/login");
  };
  return (
    <Button variant="contained" type="submit" onClick={logout}>
      Выход
    </Button>
  );
};
