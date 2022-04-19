import { combineReducers } from 'redux';
import errorOnLoginReducer from './errorOnLoginReducer';
import errorOnRegReducer from './errorOnRegReducer';
import userReducer from './userReducer';
import itemsReducer from './itemsReducer';
import sortByCategoriesReducer from './sortByCategoriesReducer';
import cartReducer from './cartReducer';
import modelOrderReducer from './modelOrderReducer';

// import {EditProfileInputsReducer} from "./editProfileInputsReducer";

const rootReducer = combineReducers({
	user: userReducer,
	errorOnReg: errorOnRegReducer,
	errorOnLogin: errorOnLoginReducer,
	items: itemsReducer,
	sortedByCategories: sortByCategoriesReducer,
	cart: cartReducer,
	model: modelOrderReducer,
	// editProfileInputs: EditProfileInputsReducer
});

export default rootReducer;
