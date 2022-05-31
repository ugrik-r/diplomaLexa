import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiReq } from "../api/apiReq";
import jwt_decode from "jwt-decode";

const initialState = {
  user: "",
  isAuth: !!localStorage.getItem("token"),
  isRole: localStorage.getItem("role"),
  workplaces: [],
  statusOrder: "",
};

export const fetchLoginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    const { login, password } = data;
    try {
      const response = await apiReq.apiAuthLogin(login, password);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchAllWorkplace = createAsyncThunk(
  "workplaces/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiReq.apiGetWorkspace();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchCreateOrder = createAsyncThunk(
  "workplaces/createOrder",
  async (data, { rejectWithValue }) => {
    const { workplaceId, startDateTime, endDateTime } = data;
    try {
      const response = await apiReq.apiPostOrder(
        workplaceId,
        startDateTime,
        endDateTime
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const reduxSlice = createSlice({
  name: "redux",
  initialState,
  reducers: {
    clearOrderStatus(state) {
      state.statusOrder = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchLoginUser.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      const { login, jwtToken } = payload;
      state.isRole = jwt_decode(jwtToken).systemRole.name;
      state.isAuth = true;
      state.userName = login;
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("role", state.isRole);
    });
    builder.addCase(fetchLoginUser.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errorsLogin = payload.message;
    });
    builder.addCase(fetchAllWorkplace.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      state.workplaces = payload;
    });
    builder.addCase(fetchCreateOrder.fulfilled, (state, { payload }) => {
      state.statusOrder = "fulfilled";
    });
    builder.addCase(fetchCreateOrder.rejected, (state, action) => {
      state.statusOrder = "rejected";
    });
  },
});

export const { clearOrderStatus } = reduxSlice.actions;
export default reduxSlice.reducer;
