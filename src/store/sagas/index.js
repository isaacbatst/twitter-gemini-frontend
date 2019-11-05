import { takeEvery, all } from "@redux-saga/core/effects";
import { requestAddTweet } from "./tweets";

function* watchAddTweet() {
  yield takeEvery("REQUEST_ADD_TWEET", requestAddTweet);
}

export default function* root() {
  yield all([watchAddTweet()]);
}
