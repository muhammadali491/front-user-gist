// src/services/courseService.js
import axios from "axios";

// const API_URL = "http://localhost:5000/api/courses";
const API_URL = "https://backend-gist-production.up.railway.app/api/courses";

// const API_URL = "/api/courses";

export const getCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
