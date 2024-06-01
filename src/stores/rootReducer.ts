import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './screens/publicScreens';

export const reducer = combineReducers({
  auth: authReducer,
});
