import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "../api/apiAuth";
import jwt_decode from "jwt-decode";

const initialState = {
  user: "",
  isAuth: !!localStorage.getItem("token"),
  isRole: "",
};

export const fetchLoginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    const { login, password } = data;
    try {
      const response = await apiAuth.apiAuthLogin(login, password);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const reduxSlice = createSlice({
  name: "redux",
  initialState,
  reducers: {},
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
    });
    builder.addCase(fetchLoginUser.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errorsLogin = payload.message;
    });
  },
});

export default reduxSlice.reducer;
