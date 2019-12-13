export function requestLoadTweets() {
  return {
    type: "REQUEST_LOAD_TWEETS",
    payload: {
      loading: true
    }
  };
}

export function successLoadTweets(tweets) {
  return {
    type: "SUCCESS_LOAD_TWEETS",
    payload: {
      tweets
    }
  };
}

export function failureLoadTweets() {
  return {
    type: "FAILURE_LOAD_TWEETS",
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

export function successAddTweet(tweet) {
  return {
    type: "SUCCESS_ADD_TWEET",
    payload: {
      tweet
    }
  };
}

export function failureAddTweet() {
  return {
    type: "FAILURE_ADD_TWEET",
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

export function successUpdateTweet(tweet) {
  return {
    type: "SUCCESS_UPDATE_TWEET",
    payload: {
      tweet
    }
  };
}

export function failureUpdateTweet() {
  return {
    type: "FAILURE_UPDATE_TWEET",
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

export function successDeleteTweet(tweetID) {
  return {
    type: "SUCCESS_DELETE_TWEET",
    payload: {
      tweetID
    }
  };
}

export function failureDeleteTweet() {
  return {
    type: "FAILURE_DELETE_TWEET",
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
