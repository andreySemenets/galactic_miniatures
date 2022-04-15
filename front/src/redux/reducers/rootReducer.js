import { combineReducers } from 'redux';
import errorOnLoginReducer from './errorOnLoginReducer';
import errorOnRegReducer from './errorOnRegReducer';
import userReducer from './userReducer';
// import {EditProfileInputsReducer} from "./editProfileInputsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  errorOnReg: errorOnRegReducer,
  errorOnLogin: errorOnLoginReducer,
  // editProfileInputs: EditProfileInputsReducer
});

export default rootReducer;
