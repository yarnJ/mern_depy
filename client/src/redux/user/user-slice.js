import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../service/userService";

const initialState = {
  loading: []
}

export const asyncRegisterUser = createAsyncThunk(
  "userAuth/asyncRegisterUser", 
  async(params, thunkOptions) => {
    const { rejectWithValue } = thunkOptions;
    const response = await userService.registerUser(params);
    if(response.error !== null && response.error !== undefined) {
      return rejectWithValue(response.error.errorMessage)
    }
    return response;
  }
);

export const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(asyncRegisterUser.fulfilled, (state, action) => {
      state.loading = action.payload.data;
    });
  }
});

export const userReducer = userSlice.reducer;