export const INITIAL_STATE = {
  tweets: [],
  error: false,
  isAddingTweet: false,
  isFetching: false,
  isUpdating: false,
  updatingTweetID: null,
  isDeleting: false,
  showConfirmDeleteModal: false,
  deletingTweetID: null
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_ADD_TWEET":
      return { ...state, isAddingTweet: true, error: false };
    case "SUCCESS_ADD_TWEET":
      return {
        ...state,
        isAddingTweet: false,
        error: false,
        tweets: [action.payload.tweet, ...state.tweets]
      };
    case "FAILURE_ADD_TWEET":
      return { ...state, isAddingTweet: false, error: true };
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
        updatingTweetID: action.payload.tweet.id,
        error: false
      };
    case "SUCCESS_UPDATE_TWEET":
      return {
        ...state,
        isUpdating: false,
        updatingTweetID: null,
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
        updatingTweetID: null,
        error: true
      };
    case "SHOW_TWEET_CONFIRM_DELETE":
      return {
        ...state,
        showConfirmDeleteModal: true,
        deletingTweetID: action.payload.tweetID
      };
    case "HIDE_TWEET_CONFIRM_DELETE":
      return {
        ...state,
        showConfirmDeleteModal: false,
        deletingTweetID: null
      };
    case "REQUEST_DELETE_TWEET":
      return {
        ...state,
        isDeleting: true,
        showConfirmDeleteModal: false
      };
    case "SUCCESS_DELETE_TWEET":
      return {
        ...state,
        isDeleting: false,
        tweets: state.tweets.filter(
          tweet => tweet.id !== action.payload.tweetID
        )
      };
    case "FAILURE_DELETE_TWEET":
      return {
        ...state,
        isDeleting: false,
        error: true
      };
    case "RESET_ERROR":
      return {
        ...state,
        error: false
      }
    default:
      return state;
  }
}

export default tweets;
