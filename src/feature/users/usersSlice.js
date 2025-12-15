import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

//API CALL KELIYE//
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        return await response.json();
    
    }
);
const usersSlice = createSlice({
    name: "users",
    initialState: {
        data:[],
        status: "idle",
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {   
                state.status = "loading";
            })
           .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "failed";
            }   );           
    } ,  
});
export default usersSlice.reducer;