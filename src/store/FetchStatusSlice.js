import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    stillfetching: false,
  },
  reducers: {
    MarkFetchDone: (state) => {
      state.fetchDone = true;
    },
    MarkFetchstart: (state) => {
      state.stillfetching = true;
    },
    MarkFetchend: (state) => {
      state.stillfetching = false;
    },
  },
});

export const fetchstatusactions = FetchStatusSlice.actions;

export default FetchStatusSlice;
