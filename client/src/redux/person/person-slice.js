import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PersonListService } from '../../service/personListService';

const initialState = {
  all_personList: []
};

export const asyncGetAllPesonList = createAsyncThunk(
  "personList/asyncGetAllPersonList",
  async (params, thunkOptions) => {
    const { rejectWithValue } = thunkOptions
    const response = await PersonListService.getPersonListAll()
    console.log(params, "response");
    if(response.error !== null && response.error !== undefined) {
      return rejectWithValue(response.error.errorMessage);
    }
    return response;
  }
);

export const personListSlice = createSlice({
  name: "personList",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(asyncGetAllPesonList.fulfilled, (state, action) => {
      state.all_personList = action.payload.data
    })
  }
});

export const personListReducer = personListSlice.reducer;