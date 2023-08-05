import { all, fork } from 'redux-saga/effects';
import customerJourneySaga from './CutomerJourney/saga';
import adminJourneySaga from './AdminJourney/saga';
import authJourneySaga from './AuthJourney/saga';


export default function* rootSaga() {
  yield all([
    fork(authJourneySaga),
    fork(customerJourneySaga),
    fork(adminJourneySaga),
  ]);
}
