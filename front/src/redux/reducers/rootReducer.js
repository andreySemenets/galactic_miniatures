import { combineReducers } from 'redux';
import errorOnLoginReducer from './errorOnLoginReducer';
import errorOnRegReducer from './errorOnRegReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  errorOnReg: errorOnRegReducer,
  errorOnLogin: errorOnLoginReducer,
});

export default rootReducer;
