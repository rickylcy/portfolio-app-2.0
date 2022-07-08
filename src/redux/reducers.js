import weatherApi from "../api/index.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  current: [],
  apiStatus: "idle",
};

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrentWeather",
  async (urlData) => {
    const { url } = urlData ?? { url: "" };
    console.log(url);
    const currentWeather = await weatherApi.getCurrent(url);
    console.log("WEATHER!:", currentWeather);
    return currentWeather;
  }
);

const slice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [fetchCurrentWeather.pending]: (state) => {
      state.apiStatus = "pending";
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      const { results } = action.payload;
      state.current = results;
      state.apiStatus = "idle";
    },
    [fetchCurrentWeather.rejected]: (state) => {
      state.apiStatus = "idle";
    },
  },
});

export default slice.reducer;
