const INITIAL_STATE = {
  tweets: [],
  loading: false,
  error: false
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_ADD_TWEET":
      return { ...state, loading: true, error: false };
    case "SUCCESS_ADD_TWEET":
      return {
        ...state,
        loading: false,
        error: false,
        tweets: [action.payload.tweet, ...state.tweets]
      };
    case "FAILURE_ADD_TWEET":
      return { ...state, loading: false, error: true };
    case "REQUEST_LOAD_TWEETS":
      return { ...state, loading: true, error: false };
    case "SUCCESS_LOAD_TWEETS":
      return {
        ...state,
        loading: false,
        error: false,
        tweets: action.payload.tweets
      };
    case "FAILURE_LOAD_TWEETS":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export default tweets;
