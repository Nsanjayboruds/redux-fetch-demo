import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET API
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex(
        (u) => u.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter(
        (u) => u.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch users";
      });
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
