import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUsers(id)));

  // short way to write the same as above
  //   _.chain(getState().posts)
  //   .map("userId")
  //   .uniq()
  //   .forEach(id=>dispatch(fetchPosts(id)))
  //   .value()
};
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUsers = id => async dispatch => {
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({
    type: 'FETCH_USERS',
    payload: response.data
  });
};

// working with memoization HARD TO grasp

// export const fetchUsers = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USERS',
//     payload: response.data
//   });
// })
