// src/services/courseService.js
import axios from "axios";

// const API_URL = "http://localhost:5000/api/gallery";
const API_URL = "https://backend-gist-production.up.railway.app/api/gallery";
// const API_URL = "/api/gallery";

export const getGallery = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
