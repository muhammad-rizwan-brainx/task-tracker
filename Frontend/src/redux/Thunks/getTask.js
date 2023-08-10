import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTask = createAsyncThunk("posts", async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/tasks/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});
