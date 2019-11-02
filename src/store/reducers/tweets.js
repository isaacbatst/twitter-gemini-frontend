const INITIAL_STATE = {
  tweets: [{ id: 1, message: "Teste1", favorite: true }, { id: 2, message: "Teste2", favorite: false }]
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return { ...state, tweets: [action.payload.tweet, ...state.tweets] };
    default: 
      return state;
  }
}

export default tweets;