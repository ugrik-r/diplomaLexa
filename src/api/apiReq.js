import axios from "axios";
import api from "./axiosConfig";

export const apiReq = {
  apiAuthLogin: (login, password) =>
    axios.post("http://localhost:8081/login", {
      login,
      password,
    }),
  apiGetWorkspace: () => api.get("workplaces"),
  apiPostOrder: (workplaceId, startDateTime, endDateTime) =>
    api.post("orders", { workplaceId, startDateTime, endDateTime }),
  apiRegistration: (
    name,
    surname,
    login,
    email,
    phone,
    password,
    systemRoleId
  ) =>
    api.post("/admin/register", {
      name,
      surname,
      login,
      email,
      phone,
      password,
      systemRoleId,
    }),
  apiOffices: () => api.get("admin/offices"),
  apiUsers: () => api.get("admin/users"),
  apiFloors: () => api.get("floors"),
  apiOrders: () => api.get("orders"),
};
