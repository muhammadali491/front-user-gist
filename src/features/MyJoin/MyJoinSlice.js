import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewJoin } from "../../services/joinService";

const initialState = {
  status: "idle",
  error: null,
};

export const addJoin = createAsyncThunk("join/addJoin", async (addedJoin) => {
  const data = await addNewJoin(addedJoin);
  return data;
});

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {
    setJoin: (state, action) => {
      state.gallery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(addJoin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addJoin.fulfilled, (state, action) => {
        state.status = "succeeded";
        // If your API returns the created faculty item directly:
      })
      .addCase(addJoin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setJoin } = joinSlice.actions;

export default joinSlice;
