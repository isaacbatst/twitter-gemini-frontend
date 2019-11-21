const INITIAL_STATE = {
  tweetConfirmDelete: {
    show: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_TWEET_CONFIRM_DELETE":
      return {
        ...state,
        tweetConfirmDelete: {
          ...state.tweetConfirmDelete,
          show: true
        }
      };
    case "HIDE_TWEET_CONFIRM_DELETE":
      return {
        ...state,
        tweetConfirmDelete: {
          ...state.tweetConfirmDelete,
          show: false
        }
      };
    default:
      return state;
  }
};
