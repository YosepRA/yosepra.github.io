import { configureStore } from '@reduxjs/toolkit';

import { projectReducer } from '@Features/project/projectSlice.js';

const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;
