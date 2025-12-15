import{configureStore}from"@reduxjs/toolkit";
import usersReducer from"../feature/users/usersSlice.js";
export const store=configureStore({
    reducer:{
        users:usersReducer,
    },
});