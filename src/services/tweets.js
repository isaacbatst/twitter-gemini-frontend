import api from './index';

export function createTweet(tweet){
  return api.post('Tweets', tweet)
}

export function fetchTweets(){
  return api.get('Tweets');
}