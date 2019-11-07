export function requestLoadTweets(){
  return {
    type: 'REQUEST_LOAD_TWEETS',
    payload:{
      loading: true,
    }
  }
}
export function requestAddTweet(tweetMessage){
  return {
    type: 'REQUEST_ADD_TWEET',
    payload: {
      tweetMessage
    }
  }
}

export function requestUpdateTweet(tweet){
  return {
    type: 'REQUEST_UPDATE_TWEET',
    payload: {
      tweet
    }
  }
}