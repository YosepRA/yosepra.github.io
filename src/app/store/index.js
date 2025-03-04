import { configureStore } from '@reduxjs/toolkit';

import projectReducer from '@Features/project/project-slice.js';
import blogReducer from '@Features/blog/blog-slice.js';
import scrollReducer from '@Features/scroll/scroll-slice.js';

const store = configureStore({
  reducer: {
    project: projectReducer,
    blog: blogReducer,
    scroll: scrollReducer,
  },
});

export default store;
