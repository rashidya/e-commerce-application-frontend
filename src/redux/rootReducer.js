import { adminJourneyReducer } from './AdminJourney/slice';
import { authJourneyReducer } from './AuthJourney/slice';
import { customerJourneyReducer } from './CutomerJourney/slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  authJourney:authJourneyReducer,
  customerJourney: customerJourneyReducer,
  adminJourney:adminJourneyReducer
});

export default rootReducer;
