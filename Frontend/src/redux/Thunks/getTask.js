import { createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS from '../../axios.config'

export const getTask = createAsyncThunk("posts", async () => {
  try {
    const response = await AXIOS.get("/tasks/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});
