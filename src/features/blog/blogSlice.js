import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

import blogAPI from './blogAPI.js';

const initialState = {
  items: [],
  page: 1,
  total: 0,
  pageCount: 0,
  blogPost: null,
  status: 'idle', // idle, loading, error
  error: {
    id: '',
    message: '',
  },
};

export const fetchBlogList = createAsyncThunk(
  'blog/fetchBlogList',
  async (searchParams) => {
    const result = await blogAPI.getBlogList(searchParams);

    return result;
  },
);

export const fetchBlogPost = createAsyncThunk(
  'blog/fetchBlogPost',
  async (id) => {
    const result = await blogAPI.getBlogPost(id);

    return result;
  },
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    resetBlogPost(state) {
      state.blogPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchBlogList.fulfilled,
        (state, { payload: { items, total, skip, limit } }) => {
          state.status = 'idle';
          state.items = items;
          state.total = total;
          state.page = skip / total + 1;
          state.pageCount = Math.ceil(total / limit);
        },
      )
      .addCase(fetchBlogList.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error.message = payload.message;
      })
      .addCase(fetchBlogPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogPost.fulfilled, (state, { payload }) => {
        state.blogPost = payload;
        state.status = 'idle';
      })
      .addCase(fetchBlogPost.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error.message = payload;
      });
  },
});

export const { setStatus, resetBlogPost } = blogSlice.actions;

export default blogSlice.reducer;

/* ======================= Selectors ======================= */

export const selectBlogItems = (state) => state.blog.items;
export const selectLoadingStatus = (state) => state.blog.status;
export const selectPage = (state) => state.blog.page;
export const selectTotalItems = (state) => state.blog.total;
export const selectPageCount = (state) => state.blog.pageCount;
export const selectBlogPost = (state) => state.blog.blogPost;

export const selectBlogList = createSelector(
  [
    selectBlogItems,
    selectLoadingStatus,
    selectPage,
    selectTotalItems,
    selectPageCount,
  ],
  (items, status, page, total, pageCount) => ({
    items,
    status,
    page,
    total,
    pageCount,
  }),
);

export const selectBlogPostAndStatus = createSelector(
  [selectBlogPost, selectLoadingStatus],
  (blog, status) => ({ blog, status }),
);
