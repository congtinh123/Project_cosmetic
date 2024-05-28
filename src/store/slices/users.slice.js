import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: true,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    });
    builder.addCase(getUserList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const getUserList = createAsyncThunk("users/getAllUser", async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    console.log("first error", error);
  }
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
