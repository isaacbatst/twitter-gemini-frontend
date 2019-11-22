import { put, call } from "@redux-saga/core/effects";
import {
  createTweet,
  fetchTweets,
  updateTweet,
  deleteTweet
} from "../../services/tweets";

export function* requestUpdateTweet(action) {
  try {
    const response = yield call(updateTweet, action.payload.tweet);
    yield put({
      type: "SUCCESS_UPDATE_TWEET",
      payload: {
        tweet: response.data
      }
    });
  } catch (error) {
    yield put({
      type: "FAILURE_UPDATE_TWEET"
    });
  }
}

export function* requestAddTweet(action) {
  try {
    const response = yield call(createTweet, {
      message: action.payload.tweetMessage,
      favorite: false
    });
    yield put({
      type: "SUCCESS_ADD_TWEET",
      payload: {
        tweet: response.data
      }
    });
  } catch (error) {
    yield put({
      type: "FAILURE_ADD_TWEET"
    });
  }
}

export function* requestLoadTweets() {
  try {
    const {
      data: { data: tweets }
    } = yield call(fetchTweets);
    yield put({
      type: "SUCCESS_LOAD_TWEETS",
      payload: {
        tweets
      }
    });
  } catch (error) {
    yield put({
      type: "FAILURE_LOAD_TWEETS",
      payload: {
        tweets: []
      }
    });
  }
}

export function* requestDeleteTweet(action) {
  try {
    yield deleteTweet(action.payload.tweetID);
    yield put({
      type: "SUCCESS_DELETE_TWEET",
      payload: {
        tweetID: action.payload.tweetID
      }
    });
  } catch (error) {
    yield put({
      type: "FAILURE_DELETE_TWEET",
    });
  }
}
