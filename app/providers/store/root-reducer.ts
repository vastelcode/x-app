import { combineReducers } from "@reduxjs/toolkit";

import themeReducer from '@shared/lib/slices/theme-slice';

const rootReducer = combineReducers({
  theme: themeReducer
});

export default rootReducer;