import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    lat: 0,
    long: 0
  },
  reducers: {
    setLat: (state, action) => {
      state.lat = action.payload; // action.payload should directly update the state value
    },
    setLong: (state, action) => {
      state.long = action.payload; // action.payload should directly update the state value
    }
  }
});

export const { getLat, getLong, setLat, setLong } = locationSlice.actions;

export default locationSlice.reducer;
