// src/services/facultyService.js
import axios from "axios";

// const API_URL = "http://localhost:5000/api/faculty";
const API_URL = "https://backend-gist-production.up.railway.app/api/faculty";

// const API_URL = "/api/faculty";

export const getFaculty = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
