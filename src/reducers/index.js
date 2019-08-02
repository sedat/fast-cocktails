import { combineReducers } from "redux";
import nameReducer from "./nameReducer";
import ingredientReducer from "./ingredientReducer";

export default combineReducers({
    name: nameReducer,
    ingredient: ingredientReducer
});
