import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import projectAPI from './projectAPI.js';

const initialState = {
  items: [],
  page: 1,
  total: 0,
  pageCount: 0,
  status: 'idle', // idle, loading, error
  error: '',
};

export const fetchProjects = createAsyncThunk(
  'project/fetchProject',
  async (searchParams) => {
    const result = await projectAPI.getProjects(searchParams);

    return result;
  },
);

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchProjects.fulfilled,
        (state, { payload: { items, total, skip, limit } }) => {
          state.status = 'idle';
          state.items = items;
          state.total = total;
          state.page = skip / limit + 1;
          state.pageCount = Math.ceil(total / limit);
        },
      )
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      });
  },
});

export const { setStatus } = projectSlice.actions;

export const projectReducer = projectSlice.reducer;

/* ======================= Selectors ======================= */

export const selectProjectItems = (state) => state.project.items;
export const selectLoadingStatus = (state) => state.project.status;
export const selectPage = (state) => state.project.page;
export const selectTotalItems = (state) => state.project.total;
export const selectPageCount = (state) => state.project.pageCount;

export const selectProjects = createSelector(
  [
    selectProjectItems,
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

export const selectPagination = createSelector(
  [selectPage, selectTotalItems, selectPageCount],
  (page, total, pageCount) => ({
    page,
    total,
    pageCount,
  }),
);
