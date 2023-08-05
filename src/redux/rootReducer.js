import { adminJourneyReducer } from './AdminJourney/slice';
import { customerJourneyReducer } from './CutomerJourney/slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  customerJourney: customerJourneyReducer,
  adminJourney:adminJourneyReducer
});

export default rootReducer;
