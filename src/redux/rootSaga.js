import { all, fork } from 'redux-saga/effects';
import customerJourneySaga from './CutomerJourney/saga';
import adminJourneySaga from './AdminJourney/saga';


export default function* rootSaga() {
  yield all([
    fork(customerJourneySaga),
    fork(adminJourneySaga),
  ]);
}
