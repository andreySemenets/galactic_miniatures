import { ADD_TO_CART } from '../actions/action.types';
import initState from '../initState'

const itemsReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_CART:
			return payload;

		default:
			return state;
	}
}

export default itemsReducer;
