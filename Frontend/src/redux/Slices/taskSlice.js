import { createSlice } from "@reduxjs/toolkit";
import { getTask } from "../Thunks/getTask";
const initialState = {
    task : []
}

const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=> {
        builder.addCase(getTask.fulfilled, (state, action)=>{
            state.task = action.payload;
        })
    }
})
export default taskSlice.reducer;