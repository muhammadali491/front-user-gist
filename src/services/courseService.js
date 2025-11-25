// src/services/courseService.js
import axios from "axios";

// const API_URL = "http://localhost:5000/api/courses";
const BACKEND = `${import.meta.env.VITE_API_URL}/api/courses`;

// const API_URL = "/api/courses";

export const getCourses = async () => {
  const response = await axios.get(BACKEND);
  return response.data;
};
