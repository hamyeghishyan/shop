import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const {} = todoSlice.actions;
export default todoSlice.reducer;
