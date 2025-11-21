import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/Courses/CoursesSlice";
import galleryReducer from "../features/Gallery/GallerySlice";
import facultySlice from "../features/Faculty/FacultySlice";
import messageSlice from "../features/Message/MessageSlice";
import joinSlice from "../features/MyJoin/MyJoinSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer.reducer,
    gallery: galleryReducer.reducer,
    faculty: facultySlice.reducer,
    join: joinSlice.reducer,
    message: messageSlice.reducer,
  },
});
