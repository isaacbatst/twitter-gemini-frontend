const INITIAL_STATE = {
  tweets: []
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return { ...state, tweets: [action.payload.tweets, ...state.tweets] };
    case "SUCCESS_LOAD_TWEETS": 
      return { ...state, tweets: action.payload.tweets };
    case "ERROR_LOAD_TWEETS":
      return state;
    default: 
      return state;
  }
}

export default tweets;