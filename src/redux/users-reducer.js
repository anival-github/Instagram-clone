/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import Network from '../services/network';

const InstaService = new Network();

const SET_USERS = 'SET_USERS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialStore = {
  users: [],
  error: false,
  currentUserId: null,
};

export const usersReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USERS:
      if (action.error) {
        return {
          ...state,
          error: action.error,
        };
      }
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUserId: action.userId,
      };
    default:
      return state;
  }
};

export const setUsers = (error, users) => ({
  type: SET_USERS,
  users,
  error,
});

export const setUser = (userId) => ({
  type: SET_CURRENT_USER,
  userId,
});

export const getUsers = () => (dispatch) => {
  InstaService.getAllUsers()
    .then((result) => dispatch(setUsers(false, result)))
    .catch(() => dispatch(setUsers(true)));
};
