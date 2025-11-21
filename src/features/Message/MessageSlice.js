import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewMessage } from "../../services/messageService";

const initialState = {
  message: [],
  status: "idle",
  error: null,
};

// thunk to fetch join from backend
export const addMessage = createAsyncThunk(
  "message/addMessage",
  async (messageData) => {
    const data = await addNewMessage(messageData);
    return data;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMessage.pending, (state) => {
        // Handle loading state if needed
        console.log("Fetching Message...");
        state.status = "loading";
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        // Handle successful fetch
        console.log("Message fetched successfully:", action.payload);
        state.status = "succeeded";
        state.message = action.payload;
      })
      .addCase(addMessage.rejected, (state, action) => {
        // Handle error state if needed
        state.status = "failed";
        console.error("Failed to fetch Message:", action.error.message);
      });
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice;
