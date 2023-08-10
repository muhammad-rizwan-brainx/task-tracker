import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
// const GET_URL = 'https://jsonplaceholder.typicode.com/posts/1'

export const getTask = createAsyncThunk('posts', async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/tasks/")
        console.log(response.data)
        return response.data
    } catch (error) {
        return error
    }
})


// export const addPost = createAsyncThunk('posts', async () => {
//     try {
//         const response = await axios.post(POST_URL, {
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         })
//     } catch (error) {
//         return error
//     }
// })