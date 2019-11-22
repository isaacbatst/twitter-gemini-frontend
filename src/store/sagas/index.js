import { takeEvery, all } from "@redux-saga/core/effects";
import { requestAddTweet, requestLoadTweets, requestUpdateTweet, requestDeleteTweet } from "./tweets";

function* watchAddTweet() {
  yield takeEvery("REQUEST_ADD_TWEET", requestAddTweet);
}

function* watchLoadTweets(){
  yield takeEvery("REQUEST_LOAD_TWEETS", requestLoadTweets);
}

function* watchUpdateTweet(){
  yield takeEvery("REQUEST_UPDATE_TWEET", requestUpdateTweet)
}

function* watchDeleteTweet(){
  yield takeEvery("REQUEST_DELETE_TWEET", requestDeleteTweet)
}

export default function* root() {
  yield all([
    watchAddTweet(),
    watchLoadTweets(), 
    watchUpdateTweet() ,
    watchDeleteTweet()
  ]);
}
