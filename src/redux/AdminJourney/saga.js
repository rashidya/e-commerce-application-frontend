import { call, put, takeEvery } from "redux-saga/effects";
import { fetchAllItems ,addItem} from "../../services/itemService";
import { adminJourneyAction } from "./slice";

// ------------------------ Async Functions -------------------------

async function callGetItemList() {
  return await fetchAllItems();
}

async function callAddItem(item) {
  return await addItem(item);
}

// ------------------------ Saga Functions -------------------------

export function* watchGetItemListAsync() {
  try {
    const items = yield call(callGetItemList);

    yield put(adminJourneyAction.fetchItemListuccess(items));
  } catch (error) {
    yield put(adminJourneyAction.fetchItemListFailure("error"));
  }
}

export function* watchAddItemAsync({payload}) {
  try {
    yield call(callAddItem,payload);
    yield put(adminJourneyAction.addItemSuccess());
    alert('Item added Successfully')
  } catch (error) {
    yield put(adminJourneyAction.addItemFailure("error"));
  }
}

export function* watchadminJourneySagas() {
  yield takeEvery(adminJourneyAction.fetchItemList, watchGetItemListAsync);
  yield takeEvery(adminJourneyAction.addItem, watchAddItemAsync);
}

const adminJourneySaga = watchadminJourneySagas;
export default adminJourneySaga;
