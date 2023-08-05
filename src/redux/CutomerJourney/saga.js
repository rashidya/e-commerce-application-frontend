import { call, put, takeEvery } from "redux-saga/effects";
import { fetchAllItems } from "../../services/itemService";
import { customerJourneyAction } from "./slice";
import {checkout} from '../../services/cartService'

// ------------------------ Async Functions -------------------------

async function callGetItemList() {
  return await fetchAllItems();
}

async function callCheckout(sale) {
  return await checkout(sale);
}

// ------------------------ Saga Functions -------------------------

export function* watchGetItemListAsync() {
  try {
    const items = yield call(callGetItemList);

    yield put(customerJourneyAction.fetchItemListuccess(items));
  } catch (error) {
    yield put(customerJourneyAction.fetchItemListFailure("error"));
  }
}

export function* watchCheckoutAsync({payload}) {
  try {
    yield call(callCheckout,payload);
    yield put(customerJourneyAction.checkoutSuccess());
    alert('Checkout Successfully')
  } catch (error) {
    console.log(error);
    yield put(customerJourneyAction.checkoutFailure("error"));
  }
}

export function* watchCustomerJourneySagas() {
  yield takeEvery(customerJourneyAction.fetchItemList, watchGetItemListAsync);
  yield takeEvery(customerJourneyAction.checkout, watchCheckoutAsync);
}

const customerJourneySaga = watchCustomerJourneySagas;
export default customerJourneySaga;
