export function addTweet(tweet){
  return {
    type: 'ADD_TWEET',
    payload: {
      tweet
    }
  }
}