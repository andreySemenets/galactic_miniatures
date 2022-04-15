import { combineReducers } from 'redux';
import errorOnLoginReducer from './errorOnLoginReducer';
import errorOnRegReducer from './errorOnRegReducer';
import userReducer from './userReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  errorOnReg: errorOnRegReducer,
  errorOnLogin: errorOnLoginReducer,
  items: itemsReducer,
});

export default rootReducer;
