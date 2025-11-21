// src/services/courseService.js
import axios from "axios";

// const API_URL = "http://localhost:5000/api/gallery";
const API_URL = "https://backend-gist-production.up.railway.app/api/message";

export const addNewMessage = async (formData) => {
  console.log("Ready to send formdata to backend ", formData);
  const response = await axios.post(`${API_URL}`, formData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
