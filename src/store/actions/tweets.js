export function requestAddTweet(tweet){
  return {
    type: 'REQUEST_ADD_TWEET',
    payload: {
      tweet
    }
  }
}