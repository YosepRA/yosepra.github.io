import { configureStore } from '@reduxjs/toolkit';

import projectReducer from '@Features/project/project-slice.js';
import blogReducer from '@Features/blog/blog-slice.js';

const store = configureStore({
  reducer: {
    project: projectReducer,
    blog: blogReducer,
  },
});

export default store;
