import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; 
import rootSaga from './rootSaga'; 
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:rootReducer,
  middleware: [sagaMiddleware],
  devTools:true

});


sagaMiddleware.run(rootSaga);

export default store;
