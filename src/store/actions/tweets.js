export function requestLoadTweets(){
  return {
    type: 'REQUEST_LOAD_TWEETS',
  }
}
export function requestAddTweet(tweet){
  return {
    type: 'REQUEST_ADD_TWEET',
    payload: {
      tweet
    }
  }
}