import api from '../../services';
import { put, call } from "@redux-saga/core/effects";
import { createTweet, fetchTweets } from '../../services/tweets';

export function* requestAddTweet(action) {
  try {
    const response = yield call(createTweet, {
      message: action.payload.tweetMessage,
      favorite: false
    })
    yield put({
      type: 'SUCCESS_ADD_TWEET',
      payload: {
        tweet: response.data
      }
    })
  } catch(error){
    yield put({
      type: 'FAILURE_ADD_TWEET',
    })
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
        tweets: [],
      }
    })
  }
}
