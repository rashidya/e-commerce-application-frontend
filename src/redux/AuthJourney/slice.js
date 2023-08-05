/* eslint-disable array-callback-return */
import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    signUpLoading:false,
    signUpError:{
        hasError:false,
        description:''
    },
    loginLoading:false,
    loginError:{
        hasError:false,
        description:''
    },
};

export const authJourneySlice = createSlice({
  name: 'authJourney',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.signUpLoading = true;    
    },
    signUpSuccess: (
      state,
      action
    ) => {
      state.signUpLoading = false;
    },
    signUpFailure: (state, action) => {
      state.signUpLoading = false;
      state.signUpError = {
        hasError: true,
        description: action.payload,
      };
    },
    login: (state, action) => {
      state.loginLoading = true;    
    },
    loginSuccess: (
      state,
      action
    ) => {
      state.loginLoading = false;
    },
    loginFailure: (state, action) => {
      state.loginLoading = false;
      state.loginError = {
        hasError: true,
        description: action.payload,
      };
    },
}});

export const {
  actions: authJourneyAction,
  reducer: authJourneyReducer,
} = authJourneySlice;
