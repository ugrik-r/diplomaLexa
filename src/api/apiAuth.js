import axios from "axios";

export const apiAuth = {
  apiAuthLogin: (login, password) =>
    axios.post("http://localhost:8081/login", {
      login,
      password,
    }),
};
