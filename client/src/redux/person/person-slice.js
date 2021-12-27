import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PersonListService } from '../../service/personListService';

const initialState = {
  all_personList: [],
  personListById: []
};

export const asyncCreatePersonList = createAsyncThunk(
  "personList/asyncCresatePersonList",
  async (params, thunkOptions) => {
    const { rejectWithValue } = thunkOptions
    const response = await PersonListService.createPersonList(params)
    if(response.error !== null && response.error !== undefined) {
      return rejectWithValue(response.error.errorMessage)
    }
    return response;
  }
);

export const asyncEditPersonList = createAsyncThunk(
  "personList/asyncEditPersonList",
  async (params, thunkOptions) => {
    const { rejectWithValue } = thunkOptions
    const response = await PersonListService.editPersonList(params)
    if(response.error !== null && response.error !== undefined) {
      return rejectWithValue(response.error.errorMessage)
    }
    return response;
  }
);

export const asyncGetPersonListByid = createAsyncThunk(
  "personList/asyncGetPersonListByid",
  async (params, thunkOptions) => {
    const { rejectWithValue } = thunkOptions
    const response = await PersonListService.getPersonListById(params)
    if(response.error !== null && response.error !== undefined) {
      return rejectWithValue(response.error.errorMessage)
    }
    return response;
  }
);

export const asyncGetAllPesonList = createAsyncThunk(
  "personList/asyncGetAllPersonList",
  async (params, thunkOptions) => {
    const { rejectWithValue } = thunkOptions
    const response = await PersonListService.getPersonListAll()
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

    builder.addCase(asyncGetPersonListByid.fulfilled, (state, action) => {
      state.personListById = action.payload.data
    })

    builder.addCase(asyncEditPersonList.fulfilled, (state, action) => {
      state.personListById = action.payload.data
    })
  }
});

export const personListReducer = personListSlice.reducer;