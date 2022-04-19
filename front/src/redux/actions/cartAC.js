import { ADD_TO_CART } from './action.types';
import axios from 'axios';

export const setCart = (value) => ({ type: ADD_TO_CART, payload: value });

export const addModelToCart = (event, data) => (dispatch) => {
	event.preventDefault();
	// console.log('IIIIIIIDDDDDDDDD', data.id);
	axios.post(`http://localhost:4000/cart/${data.id}`, data, { withCredentials: true })
		.then((res) => {
			console.log('RESULT _____', res);
		});
	dispatch(setCart(data));
};
