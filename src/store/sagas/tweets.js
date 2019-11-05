import { put } from '@redux-saga/core/effects';

export function* requestAddTweet(action){
  yield put({
    type: 'ADD_TWEET',
    payload: {
      tweet: action.payload.tweet
    }
  });
}