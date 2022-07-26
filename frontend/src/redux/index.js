import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import shoppingReducer from "./shoppingReducer";

export default combineReducers({
  weather: weatherReducer,
  shopping: shoppingReducer,
});
