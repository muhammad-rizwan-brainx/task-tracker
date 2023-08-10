import { createSlice } from "@reduxjs/toolkit";
import { getTask } from "../Thunks/getTask";
const initialState = {
  task: [],
  error,
  pending
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.task = action.payload;
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(getTask.pending, (state, action) => {
      state.pending = action.payload;
    });
   
  },
});
export default taskSlice.reducer;
