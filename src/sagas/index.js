import { all, fork } from "redux-saga/effects";

import { watchCategoryListSagasAsync } from "./category-list.saga";
import { watchProfileSagasAsync } from "./profile.saga";

export default function* sagas() {
  yield all([
    fork(watchCategoryListSagasAsync),
    fork(watchProfileSagasAsync)
  ]);
}
