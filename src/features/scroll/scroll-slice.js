import { createSlice, createSelector } from '@reduxjs/toolkit';

// Scroll feature can handle vertical and horizontal scroll. But for now,
// it can only handle veritcal (y) scroll.

const initialState = {
  x: 0,
  y: 0,
  directionX: '', // left, right
  directionY: '', // up, down
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setPosition(state, { payload: { x, y } }) {
      state.x = x;
      state.y = y;
    },
    setDirection(state, { payload: { x, y } }) {
      state.directionX = x;
      state.directionY = y;
    },
  },
});

export const { setPosition, setDirection } = scrollSlice.actions;

export default scrollSlice.reducer;

/* ======================= Selectors ======================= */

export const selectX = (state) => state.scroll.x;
export const selectY = (state) => state.scroll.y;
export const selectDirectionX = (state) => state.scroll.directionX;
export const selectDirectionY = (state) => state.scroll.directionY;

export const selectScrollState = createSelector(
  [selectX, selectY, selectDirectionX, selectDirectionY],
  (x, y, directionX, directionY) => ({
    x,
    y,
    directionX,
    directionY,
  }),
);
