import { combineReducers } from "redux";
import scoreReducer from "./scoreReducer.js";

export default combineReducers({
    score: scoreReducer
});