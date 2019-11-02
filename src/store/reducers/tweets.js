const INITIAL_STATE = {
  tweets: [{ id: 1, message: "Teste1" }, { id: 2, message: "Teste2" }]
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return { ...state, tweets: [...state.tweets, action.tweet] };
    default: 
      return state;
  }
}

export default tweets;