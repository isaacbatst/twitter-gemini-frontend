const INITIAL_STATE = {
  tweets: [],
  loading: false,
  error: false
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return { ...state, tweets: [action.payload.tweets, ...state.tweets] };
    case "REQUEST_LOAD_TWEETS":
      return { ...state, loading: true };
    case "SUCCESS_LOAD_TWEETS":
      return { ...state, loading: false, tweets: action.payload.tweets };
    case "FAILURE_LOAD_TWEETS":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export default tweets;
