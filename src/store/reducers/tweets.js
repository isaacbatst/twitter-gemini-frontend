const INITIAL_STATE = {
  tweets: [],
  error: false,
  isFetching: false,
  isUpdating: false,
  updatingTweetId: null
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_ADD_TWEET":
      return { ...state, isFetching: true, error: false };
    case "SUCCESS_ADD_TWEET":
      return {
        ...state,
        isFetching: false,
        error: false,
        tweets: [action.payload.tweet, ...state.tweets]
      };
    case "FAILURE_ADD_TWEET":
      return { ...state, isFetching: false, error: true };
    case "REQUEST_LOAD_TWEETS":
      return { ...state, isFetching: true, error: false };
    case "SUCCESS_LOAD_TWEETS":
      return {
        ...state,
        isFetching: false,
        error: false,
        tweets: action.payload.tweets
      };
    case "FAILURE_LOAD_TWEETS":
      return { ...state, isFetching: false, error: true };
    case "REQUEST_UPDATE_TWEET":
      return {
        ...state,
        isUpdating: true,
        updatingTweetId: action.payload.tweet.id,
        error: false
      };
    case "SUCCESS_UPDATE_TWEET":
      return {
        ...state,
        isUpdating: false,
        updatingTweetId: null,
        error: false,
        tweets: state.tweets.map(tweet => {
          if (tweet.id === action.payload.tweet.id) {
            return action.payload.tweet;
          }
          return tweet;
        })
      };
    case "FAILURE_UPDATE_TWEET":
      return {
        ...state,
        isUpdating: false,
        updatingTweetId: null,
        error: true
      };
    default:
      return state;
  }
}

export default tweets;
