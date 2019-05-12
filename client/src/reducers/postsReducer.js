import { FETCH_POSTS, DELETE_POST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload || false;
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload._id);
    default:
      return state;
  }
}
