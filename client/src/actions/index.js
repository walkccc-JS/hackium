import axios from 'axios';
import { FETCH_USER, FETCH_POSTS, DELETE_POST } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/users/own');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitPost = (values, history) => async dispatch => {
  const res = await axios.post('/api/posts', values);

  history.push('/posts');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPosts = () => async dispatch => {
  const res = await axios.get('/api/posts/own');

  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const deletePost = id => async dispatch => {
  const res = await axios.delete(`/api/posts/${id}`);

  dispatch({ type: DELETE_POST, payload: res.data });
};
