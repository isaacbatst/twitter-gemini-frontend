import { put, call } from "@redux-saga/core/effects";
import {
  createTweet,
  fetchTweets,
  updateTweet,
  deleteTweet
} from "../../services/tweets";
import {
  successUpdateTweet,
  failureUpdateTweet,
  successAddTweet,
  failureAddTweet,
  succesLoadTweets,
  failureLoadTweets,
  successDeleteTweet,
  failureDeleteTweet
} from "../actions/tweets";

export function* requestUpdateTweet(action) {
  try {
    const response = yield call(updateTweet, action.payload.tweet);
    yield put(successUpdateTweet(response.data));
  } catch (error) {
    yield put(failureUpdateTweet());
  }
}

export function* requestAddTweet(action) {
  try {
    const response = yield call(createTweet, {
      message: action.payload.tweetMessage,
      favorite: false
    });

    yield put(successAddTweet(response.data));
  } catch (error) {
    yield put(failureAddTweet());
  }
}

export function* requestLoadTweets() {
  try {
    const {
      data: { data: tweets }
    } = yield call(fetchTweets);
    yield put(succesLoadTweets(tweets));
  } catch (error) {
    yield put(failureLoadTweets());
  }
}

export function* requestDeleteTweet(action) {
  try {
    yield deleteTweet(action.payload.tweetID);
    yield put(successDeleteTweet(action.payload.tweetID));
  } catch (error) {
    yield put(failureDeleteTweet());
  }
}
