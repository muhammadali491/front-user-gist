import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCourses } from "../../services/courseService";

const initialState = {
  courses: [],
  status: "idle",
  error: null,
};

// thunk to fetch courses from backend
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const data = await getCourses();
    return data;
  }
);
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        // Handle loading state if needed
        console.log("Fetching courses...");
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        // Handle successful fetch
        console.log("Courses fetched successfully:", action.payload);
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        // Handle error state if needed
        state.status = "failed";
        console.error("Failed to fetch courses:", action.error.message);
      });
  },
});

export const { setCourses } = courseSlice.actions;

export default courseSlice;
