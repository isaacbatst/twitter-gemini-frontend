import axios from "axios";
import { put, call } from "@redux-saga/core/effects";

export function* requestAddTweet(action) {
  yield put({
    type: "ADD_TWEET",
    payload: {
      tweet: action.payload.tweet
    }
  });
}

export function* requestLoadTweets() {
  try {
    const {
      data: { data: tweets }
    } = yield call(axios.get, "http://127.0.0.1:3001/api/v1/Tweets");
    yield put({
      type: "SUCCESS_LOAD_TWEETS",
      payload: {
        loading: false,
        tweets
      }
    });
  } catch (error) {
    yield put({
      type: "FAILURE_LOAD_TWEETS",
      payload: {
        tweets: [],
        loading: false
      }
    })
  }
}
