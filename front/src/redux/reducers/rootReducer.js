import { combineReducers } from 'redux';
import errorOnLoginReducer from './errorOnLoginReducer';
import errorOnRegReducer from './errorOnRegReducer';
import userReducer from './userReducer';
import itemsReducer from './itemsReducer';
import sortByCategoriesReducer from './sortByCategoriesReducer';
<<<<<<< HEAD
import cartReducer from './cartReducer';
import modelOrderReducer from './modelOrderReducer';
=======
import catalogReducer from './catalogReducer';
>>>>>>> master

// import {EditProfileInputsReducer} from "./editProfileInputsReducer";

const rootReducer = combineReducers({
<<<<<<< HEAD
	user: userReducer,
	errorOnReg: errorOnRegReducer,
	errorOnLogin: errorOnLoginReducer,
	items: itemsReducer,
	sortedByCategories: sortByCategoriesReducer,
	cart: cartReducer,
	model: modelOrderReducer,
	// editProfileInputs: EditProfileInputsReducer
=======
  user: userReducer,
  errorOnReg: errorOnRegReducer,
  errorOnLogin: errorOnLoginReducer,
  items: itemsReducer,
  sortedByCategories: sortByCategoriesReducer,
  catalogItems: catalogReducer,
  // editProfileInputs: EditProfileInputsReducer
>>>>>>> master
});

export default rootReducer;
