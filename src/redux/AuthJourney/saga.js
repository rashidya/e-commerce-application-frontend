import { call, put, takeEvery } from "redux-saga/effects";
import { authJourneyAction } from "./slice";
import { login, signUp } from "../../services/authService";
import { ROUTE_ADD_ITEM_PAGE, ROUTE_ITEMS_PAGE, ROUTE_LOGIN_PAGE } from "../../utils/routes";

// ------------------------ Async Functions -------------------------

async function callSignUp(user) {
  return await signUp(user);
}

async function callLogin(user) {
  return await login(user);
}

// ------------------------ Saga Functions -------------------------

export function* watchSignUpAsync({ payload }) {
  try {
    yield call(callSignUp, payload.values);
    yield put(authJourneyAction.signUpSuccess());
    payload.navigate(ROUTE_LOGIN_PAGE);
    alert("Signed Up Successfully");
  } catch (error) {
    yield put(authJourneyAction.signUpFailure("error"));
  }
}

export function* watchLoginAsync({ payload }) {
  try {
    const result = yield call(callLogin, payload.values);
   
    console.log(result);
    if (result.status === 200) {
      yield put(authJourneyAction.loginSuccess());
      const role=result.data.user.role
      localStorage.setItem("role",role );
      if(role==='admin')
      payload.navigate(ROUTE_ADD_ITEM_PAGE);
      if(role==='user')
      payload.navigate(ROUTE_ITEMS_PAGE);
    }
    if (result.response.status === 401) {
      alert(result.response.data.message);
    }
  } catch (error) {
    yield put(authJourneyAction.loginFailure("error"));
  }
}

export function* watchauthJourneySagas() {
  yield takeEvery(authJourneyAction.signUp, watchSignUpAsync);
  yield takeEvery(authJourneyAction.login, watchLoginAsync);
}

const authJourneySaga = watchauthJourneySagas;
export default authJourneySaga;
