/* eslint-disable array-callback-return */
import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    fetchItemListLoading:false,
    itemList:[],
    fetchItemListError:{
        hasError:false,
        description:''
    },
    cartItems:[],
    checkoutLoading:false,
    checkoutError:{
        hasError:false,
        description:''
    },
};

export const customerJourneySlice = createSlice({
  name: 'customerJourney',
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
    setCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    checkout: (state, action) => {
      state.checkoutLoading = true;
      
    },
    checkoutSuccess: (
      state,
      action
    ) => {
      state.checkoutLoading = false;
      state.cartItems=[]
    },
    checkoutFailure: (state, action) => {
      state.checkoutLoading = false;
      state.checkoutError = {
        hasError: true,
        description: action.payload,
      };
    },
}});

export const {
  actions: customerJourneyAction,
  reducer: customerJourneyReducer,
} = customerJourneySlice;
