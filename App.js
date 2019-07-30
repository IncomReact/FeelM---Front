import React from 'react';
import Navigation from './Components/Navigations/Navigations';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux'
import filmData from './Components/Redux/Films.Reducer';
import filterData from './Components/Redux/Filter.Reducer';
import wishlistData from './Components/Redux/Wishlist.Reducer';
import user from './Components/Redux/user.Reducer';

const store = createStore(combineReducers({ filmData, filterData, wishlistData, user }));
export default function App() {
  return (
    <Provider store={store}>
    <Navigation />
    </Provider>
  );
}
