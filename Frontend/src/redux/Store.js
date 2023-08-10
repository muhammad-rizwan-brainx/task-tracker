import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slices/taskSlice"
const store = configureStore({
    reducer : {
        task : taskReducer
    }
});

export default store