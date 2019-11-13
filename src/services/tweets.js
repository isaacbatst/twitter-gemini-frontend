import api from './';
import { id } from 'postcss-selector-parser';

export function createTweet(tweet){
  return api.post('Tweets', tweet)
}

export function fetchTweets(){
  return api.get('Tweets');
}

export function updateTweet(tweet){
  return api.put(`Tweets/${tweet.id}`, {
    message: tweet.message,
    favorite: tweet.favorite
  })
}