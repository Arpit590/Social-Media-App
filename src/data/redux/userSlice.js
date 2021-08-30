import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        darkMode: false
    },
    reducers:{
        login:(state, action)=>{
            state.user = action.payload;
        },
        logout: (state)=>{
            state.user = null;
        },
        setDarkMode: (state, action)=>{
            state.darkMode = action.payload
        }
    }
});

export const {login, logout, setDarkMode} = userSlice.actions;

export const selectUser = (state)=> state.user.user;
export const selectDarkMode = (state)=>state.user.darkMode;

export default userSlice.reducer;