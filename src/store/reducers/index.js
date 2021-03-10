import { combineReducers } from 'redux';
import appReducer from './app-reducers';
import { userReducer } from './userReducer';
const allReducers = combineReducers({
  auth: userReducer,
  app: appReducer,
});

export default allReducers;
