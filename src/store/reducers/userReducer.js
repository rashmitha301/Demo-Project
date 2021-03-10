import * as actionType from '../actions/index';
import { LOGIN_USER, LOGOUT_USER } from '../actions/userAction';
const initialState = {
  user: null,
};

const userReducer = (action, state = initialState) => {
  switch (action) {
    case LOGIN_USER:
      return { ...state, user: action.user };
    case LOGOUT_USER:
      return { ...state, user: action.user };
    case actionType.UPDATE_USER: {
      const { user } = state;
      return {
        ...state,
        user: Object.assign({ ...user }, action.value),
      };
    }
    default:
      return state;
  }
};

export { userReducer };
