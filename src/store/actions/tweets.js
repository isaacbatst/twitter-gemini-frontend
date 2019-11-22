export function requestLoadTweets() {
  return {
    type: "REQUEST_LOAD_TWEETS",
    payload: {
      loading: true
    }
  };
}
export function requestAddTweet(tweetMessage) {
  return {
    type: "REQUEST_ADD_TWEET",
    payload: {
      tweetMessage
    }
  };
}

export function requestUpdateTweet(tweet) {
  return {
    type: "REQUEST_UPDATE_TWEET",
    payload: {
      tweet
    }
  };
}

export function requestDeleteTweet(tweetID) {
  return {
    type: "REQUEST_DELETE_TWEET",
    payload: {
      tweetID
    }
  };
}

export function showTweetConfirmDelete(tweetID) {
  return {
    type: "SHOW_TWEET_CONFIRM_DELETE",
    payload: {
      tweetID
    }
  };
}

export function hideTweetConfirmDelete(){
  return {
    type: "HIDE_TWEET_CONFIRM_DELETE"
  }
}
