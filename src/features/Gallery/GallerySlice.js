import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGallery } from "../../services/galleryService";

const initialState = {
  gallery: [],
  status: "idle",
  error: null,
};

// thunk to fetch gallery from backend
export const fetchGallery = createAsyncThunk(
  "gallery/fetchGallery",
  async () => {
    const data = await getGallery();
    return data;
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setGallery: (state, action) => {
      state.gallery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.pending, (state) => {
        // Handle loading state if needed
        console.log("Fetching gallery...");
        state.status = "loading";
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        // Handle successful fetch
        console.log("gallery fetched successfully:", action.payload);
        state.status = "succeeded";
        state.gallery = action.payload;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        // Handle error state if needed
        state.status = "failed";
        console.error("Failed to fetch gallery:", action.error.message);
      });
  },
});

export const { setGallery } = gallerySlice.actions;

export default gallerySlice;
