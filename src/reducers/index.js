import { combineReducers } from "redux";
import { categoryListReducer } from "./category-list.reducer";
import { profileReducer } from "./profile.reducer";

export default combineReducers({
  categoryList: categoryListReducer,
  profile: profileReducer
});
