import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFaculty } from "../../services/facultyService";

const initialState = {
  faculty: [],
  status: "idle",
  error: null,
};

// thunk to fetch faculty from backend
export const fetchFaculty = createAsyncThunk(
  "faculty/fetchFaculty", // ✅ Fixed namespace
  async () => {
    const data = await getFaculty();
    return data;
  }
);

const facultySlice = createSlice({
  name: "faculty",
  initialState,
  reducers: {
    setFaculty: (state, action) => {
      state.faculty = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaculty.pending, (state) => {
        console.log("Fetching faculty...");
        state.status = "loading";
      })
      .addCase(fetchFaculty.fulfilled, (state, action) => {
        console.log("Faculty fetched successfully:", action.payload);
        state.status = "succeeded";
        state.faculty = action.payload;
      })
      .addCase(fetchFaculty.rejected, (state, action) => {
        console.error("Failed to fetch faculty:", action.error.message);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFaculty } = facultySlice.actions;
export default facultySlice;
