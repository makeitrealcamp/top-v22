import axios from "axios";

const POSTS_SUCCESS = "POSTS_SUCCESS";
const POSTS_ERROR = "POSTS_ERROR";
const POSTS_LOADING = "POSTS_LOADING";

//action creator
export const getPosts = (payload) => {
  return function (dispatch) {
    dispatch({ type: POSTS_LOADING, payload: true });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({ type: POSTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: POSTS_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: POSTS_LOADING, payload: false });
      });
  };
};

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
