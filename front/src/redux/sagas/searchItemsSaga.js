import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { API_URL } from '../../http';
import { SEARCH_ITEMS  } from '../actions/action.types'
import { setFoundItems } from '../actions/itemsAC';

const searchItemsReq = async (itemTitle) => {
  try {
    const res = await axios.post(`${API_URL}/search/item`, {itemTitle})
    return res.data.foundItems;
  } catch (error) {
    console.log(error);
  }
};

function* searchItemsSagaWorker(action) {
  try {
    const result = yield call(searchItemsReq, action.payload)
    yield put(setFoundItems(result))
  } catch (error) {
    console.log(error);
  }
}


export default function* searchItemsSagaWatcher() {
  yield takeEvery(SEARCH_ITEMS, searchItemsSagaWorker);
}
