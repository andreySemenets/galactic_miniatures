import { SET_FOUND_ITEMS, SET_ITEMS } from '../actions/action.types';
import initState from '../initState'

const itemsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ITEMS:
      return payload;

    case SET_FOUND_ITEMS:
      return payload;

    default:
      return state;
  }
}

export default itemsReducer;
