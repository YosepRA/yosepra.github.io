import { configureStore } from '@reduxjs/toolkit';

import projectReducer from '@Features/project/projectSlice.js';
import blogReducer from '@Features/blog/blogSlice.js';

const store = configureStore({
  reducer: {
    project: projectReducer,
    blog: blogReducer,
  },
});

export default store;
