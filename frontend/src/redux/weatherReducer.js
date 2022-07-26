import weatherApi from "../api/index.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

var BNE_LAT = -27.470125;
var BNE_LONG = 153.021072;

const initialState = {
  cityWeather: [],
  cityGeo: [[BNE_LAT, BNE_LONG]],
  counter: 1,
  targetLat: BNE_LAT,
  targetLong: BNE_LONG,
  apiStatus: { current: "idle", geo: "idle" },
};

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrentWeather",
  async (arg, thunkAPI) => {
    const currentWeather = await weatherApi.getCurrent(arg.lat, arg.lng);

    return currentWeather;
  }
);

export const fetchCityGeo = createAsyncThunk(
  "weather/fetchCityGeo",
  async (cityName) => {
    const result = await weatherApi.getLatLong(cityName);
    return result;
  }
);

const slice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCard(state, cityName, action) {},
  },
  extraReducers: {
    [fetchCurrentWeather.pending]: (state) => {
      state.apiStatus.current = "pending";
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      state.cityWeather = [...state.cityWeather, action.payload];
      state.apiStatus.current = "idle";
    },
    [fetchCurrentWeather.rejected]: (state) => {
      state.apiStatus.current = "idle";
    },
    //geo
    [fetchCityGeo.pending]: (state) => {
      state.apiStatus.geo = "pending";
    },
    [fetchCityGeo.fulfilled]: (state, action) => {
      state.cityGeo = [
        ...state.cityGeo,
        [action.payload.lat, action.payload.lng],
      ];
      state.counter++;
      state.targetLat = action.payload.lat;
      state.targetLong = action.payload.lng;
      state.apiStatus.geo = "idle";
    },
    [fetchCityGeo.rejected]: (state) => {
      state.apiStatus.geo = "idle";
    },
  },
});

export const { addCard } = slice.actions;
export default slice.reducer;
