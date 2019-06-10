import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORY_LIST,
  getCategoryListSuccess,
  getCategoryListFailed
} from "../actions/category-list.action";
import Api from "../api/api";

function* getCategoryList(action) {
  try {
    const payload = yield call(Api.getCategoryList, action.payload.params);
    debugger;
    yield put(getCategoryListSuccess(payload));
  } catch (error) {
    yield put(getCategoryListFailed());
  }
}

export function* watchCategoryListSagasAsync() {
  yield takeLatest(GET_CATEGORY_LIST, getCategoryList);
}
