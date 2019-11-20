import api from './';

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