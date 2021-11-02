import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error('getPosts', error);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log('createPosts', error);
  }
};

export const updatePosts = (post) => async (dispatch) => {
  console.log('actions update');
  const _id = post._id;

  try {
    const { data } = await api.updatePost(_id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log('UPDATE', error);
  }
};
export const deletePosts = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log('DELETE', error);
  }
};

export const likePosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log('LIKE', error);
  }
};
