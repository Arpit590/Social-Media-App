import {createSlice} from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        post: []
    },
    reducers:{
        setPosts:(state, action)=>{
            state.post = action.payload;
        },
        deletePost: (state)=>{
            state.post = null;
        }
    }
});

export const {setPosts, deletePost} = postSlice.actions;

export const selectPost = (state)=> state.post.post;

export default postSlice.reducer;