import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/reduxSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./users.styles.css";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.redux.users);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя пользователя</TableCell>
            <TableCell align="right">Логин</TableCell>
            <TableCell align="right">Почта</TableCell>
            <TableCell align="right">Имя</TableCell>
            <TableCell align="right">Фамилия</TableCell>
            <TableCell align="right">Телефон</TableCell>
            <TableCell align="right">Роль</TableCell>
            <TableCell align="right">Изменение роли</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.login}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">
                {row.systemRoleId === 1 ? "Админ" : "Пользователь"}
              </TableCell>
              <TableCell align="right">
                <select>
                  <option value="">Изменить роль</option>
                  <option value="1">1 - Админ</option>
                  <option value="2">2 - Пользователь</option>
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
