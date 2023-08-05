/* eslint-disable array-callback-return */
import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    fetchItemListLoading:false,
    itemList:[],
    fetchItemListError:{
        hasError:false,
        description:''
    },
    addItemLoading:false,
    addItemError:{
        hasError:false,
        description:''
    },
};

export const adminJourneySlice = createSlice({
  name: 'adminJourney',
  initialState,
  reducers: {
    fetchItemList: (state, action) => {
      state.fetchItemListLoading = true;
      
    },
    fetchItemListuccess: (
      state,
      action
    ) => {
      state.itemList = action.payload;
      state.fetchItemListLoading = false;
    },
    fetchItemListFailure: (state, action) => {
      state.fetchItemListLoading = false;
      state.fetchItemListError = {
        hasError: true,
        description: action.payload,
      };
    },
    addItem: (state, action) => {
      state.addItemLoading = true;    
    },
    addItemSuccess: (
      state,
      action
    ) => {
      state.addItemLoading = false;
    },
    addItemFailure: (state, action) => {
      state.addItemLoading = false;
      state.addItemError = {
        hasError: true,
        description: action.payload,
      };
    },
}});

export const {
  actions: adminJourneyAction,
  reducer: adminJourneyReducer,
} = adminJourneySlice;
