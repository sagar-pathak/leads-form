/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  // Action,
  createSlice,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
//   import { stringify } from "querystring";

// import { ThunkAction } from 'redux-thunk';

import { HYDRATE } from 'next-redux-wrapper';

const sliceName = "LeadsModel";
const actionLabel = "LeadsModel";
const initialState = {
  leadsData: [],
  resStatus: 'PENDING',
};

const getLeadsSuccess = createAction(`${sliceName}/getLeadsSuccess`);

export const getLeadsAction = createAsyncThunk(
  `${sliceName}/getLeads${actionLabel}`,
  async (payload, thunkAPI) => {
      
      const apiUrl = 'http://localhost:3000/api/leads'
      console.log("url", apiUrl);
      const response = await apiHandler.get(apiUrl, false);
      //const { code, status } = response;
      //thunkAPI.dispatch(setDataForDebugAction(response));
      thunkAPI.dispatch(getLeadsSuccess(response.data));
      // reply to thunk state
      return true;
  }
);


const mainSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    getLeadsSuccess: (state, action) => {
      state.leadsDat = action.payload
      state.resStatus = 'SUCCESS'
    },
      // setLeadsSuccess: (state, action) => {
      //     state.Leads = action.payload;
      //     state.resStatus = SUCCESS;
      // },
      listFailure: () => initialState,
  },
  extraReducers: (builder) => {
      // hydrate 
      builder.addCase(HYDRATE, (state, action) => {
          return { ...action.payload[sliceName] }
      });
  },
});

const mainReducer = mainSlice.reducer;
export default mainReducer;

export const LeadsState = (state) => state[sliceName];
