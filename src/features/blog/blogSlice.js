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
  status: 'idle', // idle, loading, error
  error: '',
};

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (searchParams) => {
    const result = await blogAPI.getBlogs(searchParams);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchBlogs.fulfilled,
        (state, { payload: { items, total, skip, limit } }) => {
          state.status = 'idle';
          state.items = items;
          state.total = total;
          state.page = skip / total + 1;
          state.pageCount = Math.ceil(total / limit);
        },
      )
      .addCase(fetchBlogs.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload.message;
      });
  },
});

export const { setStatus } = blogSlice.actions;

export default blogSlice.reducer;

/* ======================= Selectors ======================= */

export const selectBlogItems = (state) => state.blog.items;
export const selectLoadingStatus = (state) => state.blog.status;
export const selectPage = (state) => state.blog.page;
export const selectTotalItems = (state) => state.blog.total;
export const selectPageCount = (state) => state.blog.pageCount;

export const selectBlogs = createSelector(
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
