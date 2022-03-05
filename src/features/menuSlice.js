import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    sidebar: false,
  },
  reducers: {
    activeMenu: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { activeMenu } = menuSlice.actions;

export const selectMenu = (state) => state.menu.sidebar;

export default menuSlice.reducer;
